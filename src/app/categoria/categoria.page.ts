import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Categoria } from '../models/categoria/categoria.inteface';
import { ModalCategoriaPage } from '../modals/modal-categoria/modal-categoria.page';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {
    
  index: number = 0;

  valueSearch: any;

  cat: Categoria;

  public catList: any[];

  constructor(public afs: AngularFirestore, public navCtrl: NavController, public modalController: ModalController) { }

  ngOnInit() {
    this.afs.collection('categorias').valueChanges().subscribe(cats => {
      this.catList = cats;
    });
  }

  goBack() {
    this.navCtrl.navigateRoot("/home/material");
  }
  
  filterList(evt) {
    //Al ir borrando en el buscardor no va comparando si coincide y actualizando
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      this.afs.collection('categorias').valueChanges().subscribe(provs => {
        this.catList = provs;
      });
      return;
    }

    this.catList = this.catList.filter(currentGoal => {
      if (currentGoal.nombre && searchTerm) {
        if (currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return;
      }
    });
  }

  addProv() {
    this.cat = {
      nombre: "",
      descripcion: ""
    };
    this.presentModal()
  }

  deleteButton(prov: Categoria) {
    this.afs.collection("categorias").doc(prov.key + prov.nombre).delete();
  }

  elementSetect(elementSelected) {
    this.valueSearch = elementSelected.nombre;
    this.cat = elementSelected;
    console.log(elementSelected);
    this.presentModal()
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalCategoriaPage,
      componentProps: { categoria: this.cat }
    });
    return await modal.present();
  }
}
