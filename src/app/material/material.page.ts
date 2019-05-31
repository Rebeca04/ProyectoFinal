import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { ModalController } from '@ionic/angular';
import { Material } from '../models/material/material.inteface';
import { Categoria } from '../models/categoria/categoria.inteface';
import { Proveedor } from '../models/proveedor/proveedor.inteface';
import { ModalMaterialPage } from '../modals/modal-material/modal-material.page';

@Component({
  selector: 'app-material',
  templateUrl: './material.page.html',
  styleUrls: ['./material.page.scss'],
})
export class MaterialPage implements OnInit {


  index: number = 0;

  valueSearch: any;

  mat: Material;
  cat: Categoria;
  prov: Proveedor;

  public loadedGoalList: any[];
  public matList: any[];
  public catList: any[];

  constructor(public afs: AngularFirestore, public navCtrl: NavController, public modalController: ModalController) { }

  ngOnInit() {
    this.afs.collection('materiales').valueChanges().subscribe(mats => {
      this.matList = mats;
    });

    
    this.afs.collection('categorias').valueChanges().subscribe(cats => {
      this.catList = cats;
    });
  }

  goBack() {
    this.navCtrl.navigateRoot("home");
  }

  filterList(evt) {
    //Al ir borrando en el buscardor no va comparando si coincide y acutalizando
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      this.afs.collection('materiales').valueChanges().subscribe(clients => {
        this.matList = clients;
      });
      return;
    }

    this.matList = this.matList.filter(currentGoal => {
      if (currentGoal.nombre && searchTerm) {
        if (currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return;
      }
    });
  }

  addCat(){
    this.navCtrl.navigateRoot("/home/categoria");
  }

  addMaterial() {
    this.mat = {
      nombre: "",
      descripcion: "",
      precio: "",
      stock: 0,
      categoria: this.cat,
      proveedor: this.prov
    };
    this.presentModal()
  }

  deleteButton(mats: Material) {
    this.afs.collection("materiales").doc(mats.key + mats.nombre).delete();
  }

  elementSetect(elementSelected) {
    this.valueSearch = elementSelected.nombre;
    this.mat = elementSelected;
    console.log(elementSelected);
    this.presentModal()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalMaterialPage,
      componentProps: { material: this.mat }
    });
    return await modal.present();
  }
}
