import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Servicio } from 'src/app/models/servicio/servicio.iteface';
import { Cliente } from 'src/app/models/cliente/cliente.inteface';
import { Trabajo } from 'src/app/models/trabajo/trabajo.inteface';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-modal-trabajo',
  templateUrl: './modal-trabajo.page.html',
  styleUrls: ['./modal-trabajo.page.scss'],
})
export class ModalTrabajoPage implements OnInit {

  tra: Trabajo;
  ser: Servicio;
  cli: Cliente;

  statusAccept: boolean = false;
  statusFinal: boolean = false;
  disabledOption: boolean = true;

  public traList: any[];
  public serList: any[];
  public cliList: any[];

  constructor(public afs: AngularFirestore, public navParmt: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.tra = navParmt.data.trabajo;
  }

  ngOnInit() {
    //cargar clientes
    this.afs.collection('clientes').valueChanges().subscribe(clientes => {
      this.cliList = clientes;
    });

    //cargar servicios
    this.afs.collection('servicios').valueChanges().subscribe(servicios => {
      this.serList = servicios;
    });
  }
  //Select-state
  onChange(select) {
    if (select.target.value == '' || select.target.value == 'pendiente') {
      this.statusAccept = false;
      console.log("false")
    }
    else if (select.target.value == 'aceptada') {
      console.log("true")
      this.statusAccept = true;
      this.tra.fechaInicio = formatDate(new Date(), 'dd/MM/yyyy hh:mm:ss', 'en');
    } else if (select.target.value == 'finalizada') {
      this.statusAccept = true;
      this.tra.fechaFin = formatDate(new Date(), 'dd/MM/yyyy hh:mm:ss', 'en');
    } else if (select.target.value == 'rechazada') {
      this.disabledOption = false;
    }
  }

  goBack() {
    this.modalCtrl.dismiss();
  }

  addUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/trabajos').doc(value.key + value.cliente).set(value)
        .then((res) => {
          resolve(res);
          this.goBack();
          this.mostrarToast();
        }, err => reject(err))
    })
  }

  deleteButton() {
    this.afs.collection("trabajos").doc(this.tra.key + this.tra.cliente).delete();
  }

  async mostrarToast() {
    const toast = await this.toastCtrl.create({
      message: 'Trabajo añadido.',
      duration: 3000
    });
    toast.present();
  }
}
