import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
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

  constructor(public afs: AngularFirestore, public navParmt: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.cli = navParmt.data.cliente;
    console.log(navParmt.data.cliente);
    // this.afs.collection('clientes').valueChanges().subscribe(clients => {
    //   this.clientList = clients;
    // });
  }

  ngOnInit() {
  }
  goBack() {
    this.modalCtrl.dismiss();
  }

  addUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/clientes').doc(value.key + value.nombre).set(value)
        .then((res) => {
          resolve(res);
          this.goBack();
          this.mostrarToast();
        }, err => reject(err))
    })
  }

  deleteButton() {
    // this.clientList = this.clientList.filter(client => {
    //   if (client.nombre && this.cli.nombre) {
    //     if (client.nombre.toLowerCase().indexOf(this.cli.nombre.toLowerCase()) > -1) {
    //       this.cli = client;
    //     }
    //   }
    // });

    this.afs.collection("clientes").doc(this.cli.key + this.cli.nombre).delete();
  }

  async mostrarToast() {
    const toast = await this.toastCtrl.create({
      message: 'Cliente añadido.',
      duration: 3000
    });
    toast.present();
  }
}
