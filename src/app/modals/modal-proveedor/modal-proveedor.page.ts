import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController  } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Proveedor } from 'src/app/models/proveedor/proveedor.inteface';

@Component({
  selector: 'app-modal-proveedor',
  templateUrl: './modal-proveedor.page.html',
  styleUrls: ['./modal-proveedor.page.scss'],
})
export class ModalProveedorPage implements OnInit {

  public provList: any[];
  pro: Proveedor;

  ngOnInit() {
  }
  
  constructor(public afs: AngularFirestore, public navParmt: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.pro = navParmt.data.proveedor;
  }

  goBack() {
    this.modalCtrl.dismiss();
  }

  addUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/proveedores').doc(value.key + value.nombre).set(value)
        .then((res) => {
          resolve(res);
          this.goBack();
          this.mostrarToast();
        }, err => reject(err))
    })
  }

  deleteButton() {
    this.afs.collection("proveedores").doc(this.pro.key + this.pro.nombre).delete();
  }

  async mostrarToast() {
    const toast = await this.toastCtrl.create({
      message: 'Proveedor añadido.',
      duration: 3000
    });
    toast.present();
  }
}
