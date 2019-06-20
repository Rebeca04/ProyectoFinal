import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController, AlertController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Servicio } from 'src/app/models/servicio/servicio.iteface';
import { Cliente } from 'src/app/models/cliente/cliente.inteface';
import { Trabajo } from 'src/app/models/trabajo/trabajo.inteface';
import { formatDate } from '@angular/common';
import { ModalMaterialServicioPage } from '../modal-material-servicio/modal-material-servicio.page';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { writeFile } from 'fs';


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
  statusPend: boolean = true;
  statusRech: boolean = true;
  statusAcep: boolean = true;
  statusFin: boolean = true;

  public traList: any[];
  public serList: any[];
  public cliList: any[];
  public matSerList: any[];
  key: any;

  selectState: any;

  exist: boolean = false;
  isUpdate: boolean;
  toastMessage: string;


  constructor(public afs: AngularFirestore, 
    public navParmt: NavParams, 
    public modalCtrl: ModalController, 
    public modalController: ModalController, 
    public toastCtrl: ToastController, 
    public alertController: AlertController) {
    this.tra = navParmt.data.trabajo;
    this.isUpdate = navParmt.data.isUpdt;
  }

  ngOnInit() {
    //cargar trabajos
    this.afs.collection('trabajos').valueChanges().subscribe(tra => {
      this.traList = tra;
    });


    //cargar clientes
    this.afs.collection('clientes').valueChanges().subscribe(clientes => {
      this.cliList = clientes;
    });

    //cargar servicios
    this.afs.collection('servicios').valueChanges().subscribe(servicios => {
      this.serList = servicios;
    });

    //cargar material-servicios
    this.afs.collection('materialServicio').valueChanges().subscribe(mateSer => {
      this.matSerList = mateSer;
    });

    if (this.tra.estado == '' || this.tra.estado == 'pendiente') {
      this.statusAccept = false;
      this.statusPend = true;
      this.statusRech = true;
      this.statusAcep = true;
      this.statusFin = false;
    } else if (this.tra.estado == 'aceptada') {
      this.statusAccept = true;
      this.statusPend = false;
      this.statusRech = true;
      this.statusAcep = true;
      this.statusFin = true;
    } else if (this.tra.estado == 'finalizada') {
      this.statusAccept = false;
      this.statusPend = false;
      this.statusRech = false;
      this.statusAcep = false;
      this.statusFin = true;
    } else if (this.tra.estado == 'rechazada') {
      this.disabledOption = false;
    }
  }
  //Select-state
  onChange(select) {
    this.selectState = select.target.value;
  }

  goBack() {
    this.presentAlertConfirm();
  }

  updateUser() {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/trabajos').doc(this.tra.key + this.tra.cliente).set(this.tra)
        .then((res) => {
          resolve(res);
          this.modalCtrl.dismiss();
          this.mostrarToast();
        }, err => reject(err))
    })
  }

  addUser() {
    this.ifExist();
    if (!this.exist) {
      if (this.selectState == '' || this.selectState == 'pendiente') {
        this.statusAccept = false;
      }
      else if (this.selectState == 'aceptada') {
        this.statusAccept = true;
        this.tra.fechaInicio = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en');
      } else if (this.selectState == 'finalizada') {
        this.statusAccept = true;
        this.tra.fechaFin = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en');
      } else if (this.selectState == 'rechazada') {
        this.disabledOption = false;
      }
    this.key=this.traList.length + 1;
    this.tra.key= this.key;
      return new Promise<any>((resolve, reject) => {
        this.afs.collection('/trabajos').doc(this.key + this.tra.cliente).set(this.tra)
          .then((res) => {
            resolve(res);
            this.modalCtrl.dismiss();
            this.mostrarToast();
          }, err => reject(err))
      })
    } else {
      this.presentAlert();
    }
  }

  deleteButton() {
    this.afs.collection("trabajos").doc(this.tra.key + this.tra.cliente).delete();
  }

  ifExist() {
    // this.traList.forEach(tr => {
    //   if (tr.nombre == this.tra.nombre) {
    //     this.exist = true;
    //   }
    // });
  }

  async addModalMaterial() {
    const modal = await this.modalController.create({
      component: ModalMaterialServicioPage,
      componentProps: { trabajo: this.tra }
    });
    return await modal.present();
  }

  async mostrarToast() {
    if (this.isUpdate) {
      this.toastMessage = "Trabajo modificado"
    } else if (!this.isUpdate) {
      this.toastMessage = "Trabajo añadido"
    }
    const toast = await this.toastCtrl.create({
      message: this.toastMessage,
      duration: 3000
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'No se pudo guardar',
      message: 'Ya hay un cliente con ese nombre.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Quiere salir sin guardar?',
      buttons: [
        {
          text: 'Salir',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.modalCtrl.dismiss();
          }
        }, {
          text: 'Guardar',
          handler: () => {
            this.addUser();
          }
        }
      ]
    });

    await alert.present();
  }
}