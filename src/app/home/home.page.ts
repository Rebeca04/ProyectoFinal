import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ClientePage } from '../cliente/cliente.page';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  clientesPag:any= ClientePage;

  constructor(public navCtrl: NavController) {  }

  ngOnInit() { }
  pushTrabajo(){
    this.navCtrl.navigateRoot("/home/trabajo");
  }

  pushMaterial(){
    this.navCtrl.navigateRoot("/home/material");
  }

  pushCliente(){
    this.navCtrl.navigateRoot("/home/cliente");
  }

  pushProveedor(){
    this.navCtrl.navigateRoot("/home/proveedor");
  }

  pushServicio(){
    this.navCtrl.navigateRoot("/home/servicio");
  }
}
