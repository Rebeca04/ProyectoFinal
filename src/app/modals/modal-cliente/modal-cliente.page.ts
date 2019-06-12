import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController, AlertController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Cliente } from 'src/app/models/cliente/cliente.inteface';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.page.html',
  styleUrls: ['./modal-cliente.page.scss'],
})
export class ModalClientePage implements OnInit {

  public clientList: any[];
  cli: Cliente;
  exist: boolean = false;
  isUpdate: boolean;
  isDelete: boolean;
  toastMessage: string;

  constructor(public afs: AngularFirestore, public navParmt: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController, public alertController: AlertController) {
    this.cli = navParmt.data.cliente;
    this.clientList = navParmt.data.listaCli;
    this.isUpdate = navParmt.data.isUpdt;
    console.log(this.isUpdate)
    // console.log(navParmt.data.cliente);
    // this.afs.collection('clientes').valueChanges().subscribe(clients => {
    //   this.clientList = clients;
    // });
  }

  ngOnInit() {
    this.ifExist();
    // crear boton update y metodo
  }
  goBack() {
    this.modalCtrl.dismiss();
  }

  updateUser(value){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/clientes').doc(value.key + value.nombre).set(value)
        .then((res) => {
          resolve(res);
          this.goBack();
          this.mostrarToast();
        }, err => reject(err))
      })
  }

  addUser(value) {
    this.ifExist();
    if (!this.exist) {
      return new Promise<any>((resolve, reject) => {
        this.afs.collection('/clientes').doc(value.key + value.nombre).set(value)
          .then((res) => {
            resolve(res);
            this.goBack();
            this.mostrarToast();
          }, err => reject(err))
      })
    } else {
        this.presentAlert();
    }

  }

  deleteButton() {
    this.afs.collection("clientes").doc(this.cli.key + this.cli.nombre).delete();
  }

  ifExist(){
    this.clientList.forEach(cli => {
      if (cli.nombre == this.cli.nombre) {
        this.exist = true;
      }
    });
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error:',
      // subHeader: 'No se pudo guardar',
      message: 'ya existe un cliente con ese nombre.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async mostrarToast() {
    // Meter el nombre del cliente --> this.toastMessage="Cliente " + this.cli.nombre + " modificado"
    if (this.isUpdate) {
      this.toastMessage="Cliente modificado"
    } else if(!this.isUpdate) {
      this.toastMessage="Cliente añadido"
    }
    const toast = await this.toastCtrl.create({
      message: this.toastMessage,
      duration: 3000
    });
    toast.present();
  }
}
