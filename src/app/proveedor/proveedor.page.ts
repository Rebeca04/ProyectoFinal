import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalProveedorPage } from '../modals/modal-proveedor/modal-proveedor.page';
import { Proveedor } from '../models/proveedor/proveedor.inteface';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.page.html',
  styleUrls: ['./proveedor.page.scss'],
})
export class ProveedorPage implements OnInit {
  
  index: number = 0;

  valueSearch: any;

  pro: Proveedor;

  public provList: any[];

  listaUsers: Array<[]>;
  constructor(public afs: AngularFirestore, public navCtrl: NavController, public modalController: ModalController) { }

  ngOnInit() {
    this.afs.collection('proveedores').valueChanges().subscribe(provs => {
      this.provList = provs;
    });
  }

  goBack() {
    this.navCtrl.navigateRoot("home");
  }

  filterList(evt) {
    //Al ir borrando en el buscardor no va comparando si coincide y actualizando
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      this.afs.collection('proveedores').valueChanges().subscribe(provs => {
        this.provList = provs;
      });
      return;
    }

    this.provList = this.provList.filter(currentGoal => {
      if (currentGoal.nombre && searchTerm) {
        if (currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return;
      }
    });
  }

  addProv() {
    this.pro = {
      nombre: "",
      telefono: 0,
      direccion: "",
      nombreContacto: ""
    };
    this.presentModal()
  }

  deleteButton(prov: Proveedor) {
    this.afs.collection("proveedores").doc(prov.key + prov.nombre).delete();
  }

  elementSetect(elementSelected) {
    this.valueSearch = elementSelected.nombre;
    this.pro = elementSelected;
    console.log(elementSelected);
    this.presentModal()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalProveedorPage,
      componentProps: { proveedor: this.pro }
    });
    return await modal.present();
  }

}
