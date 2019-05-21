import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Cliente } from '../models/cliente/cliente.inteface';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalClientePage } from '../modals/modal-cliente/modal-cliente.page';
import { toUnicode } from 'punycode';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  index: number = 0;

  valueSearch: any;

  cli: Cliente = {
    nombre: "",
    telefono: 0,
    direccion: ""
  };

  public loadedGoalList: any[];
  public clientList: any[];

  listaUsers: Array<[]>;

  constructor(public afs: AngularFirestore, public navCtrl: NavController, public modalController: ModalController) {
  }


  filterList(evt) {
    //Al ir borrando en el buscardor no va comparando si coincide
    //this.initializeItems();
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      this.afs.collection('clientes').valueChanges().subscribe(clients => {
        this.clientList = clients;
      });
      return;
    }

    this.clientList = this.clientList.filter(currentGoal => {
      if (currentGoal.nombre && searchTerm) {
        if (currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return;
      }
    });
  }

  ngOnInit() {
    this.afs.collection('clientes').valueChanges().subscribe(clients => {
      this.clientList = clients;
    });
  }
  initializeItems(): void {
    this.clientList = this.loadedGoalList;
  }
  addClient() {
    this.cli = {
      nombre: "",
      telefono: 0,
      direccion: ""
    };
    this.presentModal()
  }

  deleteButton(clien: Cliente) {
    this.afs.collection("clientes").doc(clien.key + clien.nombre).delete();
  }

  elementSetect(elementSelected) {
    this.valueSearch = elementSelected.nombre;
    this.cli = elementSelected;
    console.log(elementSelected);
    this.presentModal()
  }


  goBack() {
    this.navCtrl.navigateRoot("home");
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalClientePage,
      componentProps: { cliente: this.cli }
    });
    return await modal.present();
  }

}
