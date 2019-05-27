import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController  } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Categoria } from 'src/app/models/categoria/categoria.inteface';

@Component({
  selector: 'app-modal-categoria',
  templateUrl: './modal-categoria.page.html',
  styleUrls: ['./modal-categoria.page.scss'],
})
export class ModalCategoriaPage implements OnInit {

  public catList: any[];
  cat: Categoria;

  constructor(public afs: AngularFirestore, public navParmt: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.cat = navParmt.data.categoria;
  }

  ngOnInit() {
  }

  goBack() {
    this.modalCtrl.dismiss();
  }

  addUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/categorias').doc(value.key + value.nombre).set(value)
        .then((res) => {
          resolve(res);
          this.goBack();
          this.mostrarToast();
        }, err => reject(err))
    })
  }

  deleteButton() {
    this.afs.collection("categorias").doc(this.cat.key + this.cat.nombre).delete();
  }

  async mostrarToast() {
    const toast = await this.toastCtrl.create({
      message: 'Categoría añadida.',
      duration: 3000
    });
    toast.present();
  }
}
