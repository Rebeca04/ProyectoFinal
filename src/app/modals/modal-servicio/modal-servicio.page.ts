import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController  } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Servicio } from 'src/app/models/servicio/servicio.iteface';

@Component({
  selector: 'app-modal-servicio',
  templateUrl: './modal-servicio.page.html',
  styleUrls: ['./modal-servicio.page.scss'],
})
export class ModalServicioPage implements OnInit {

  ser: Servicio;

  constructor(public afs: AngularFirestore, public navParmt: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.ser = navParmt.data.servicio;
  }

  ngOnInit() {
  }

  goBack() {
    this.modalCtrl.dismiss();
  }

  addUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/servicios').doc(value.key + value.nombre).set(value)
        .then((res) => {
          resolve(res);
          this.goBack();
          this.mostrarToast();
        }, err => reject(err))
    })
  }

  deleteButton() {
    this.afs.collection("servicios").doc(this.ser.key + this.ser.nombre).delete();
  }

  async mostrarToast() {
    const toast = await this.toastCtrl.create({
      message: 'Servicio añadido.',
      duration: 3000
    });
    toast.present();
  }
}
