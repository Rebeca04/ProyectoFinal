import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ClientePage } from '../cliente/cliente.page';
import { NavController, AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  clientesPag:any= ClientePage;

  constructor(public navCtrl: NavController, public alertController: AlertController) {  }

  ngOnInit() { }

  async infoToast() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: 'En esta aplicación se podrá guardar y gestionar los datos necesarios para el funcionamiento de la empresa. Para cualquier duda, mirar las instrucciones que se encuentran en el manual de usuario.',
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

  // pushTrabajo(){
  //   this.navCtrl.navigateRoot("/home/trabajo");
  // }

  // pushMaterial(){
  //   this.navCtrl.navigateRoot("/home/material");
  // }

  // pushCliente(){
  //   this.navCtrl.navigateRoot("/home/cliente");
  // }

  // pushProveedor(){
  //   this.navCtrl.navigateRoot("/home/proveedor");
  // }

  // pushServicio(){
  //   this.navCtrl.navigateRoot("/home/servicio");
  // }
}
