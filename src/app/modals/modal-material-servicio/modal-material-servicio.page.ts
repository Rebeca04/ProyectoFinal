import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente/cliente.inteface';
import { Servicio } from 'src/app/models/servicio/servicio.iteface';
import { Material } from 'src/app/models/material/material.inteface';
import { MaterialServicio } from 'src/app/models/material-servicio/material-servicio.inteface';
import { Trabajo } from 'src/app/models/trabajo/trabajo.inteface';
import { NavParams, AlertController, ModalController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-modal-material-servicio',
  templateUrl: './modal-material-servicio.page.html',
  styleUrls: ['./modal-material-servicio.page.scss'],
})
export class ModalMaterialServicioPage implements OnInit {

  public cantidad:string;
  public material:string;
  matServ: MaterialServicio;
  tra: Trabajo;
  mat: Material;
  ser: Servicio;
  cli: Cliente;
  selectMat: Array<any>;
  public matList: any[];
  public matSerList: Array<any>;

  constructor(public afs: AngularFirestore, public navParmt: NavParams, public alertController: AlertController, public modalCtrl: ModalController) {
    this.tra = navParmt.data.trabajo;
  }

  ngOnInit() {
    this.afs.collection('materiales').valueChanges().subscribe(mate => {
      this.matList = mate;
    });
    
    this.afs.collection('materialServicio').valueChanges().subscribe(mateSer => {
      this.matSerList = mateSer;
    });
  }

  onChange(select) {
    // this.matSerList = select.target.value;
    console.log(select)
  }
  goBack() {
    // this.tra.materiales = this.matSerList;
    // Guardar la lista de materiales en la base de datos de trabajo
    // return new Promise<any>((resolve, reject) => {
    //   this.afs.collection('/trabajos').doc(this.tra.key + this.tra.cliente).set(this.tra)
    //     .then((res) => {
    //       resolve(res);
    //       this.modalCtrl.dismiss();
    //     }, err => reject(err))
    // })
  }

  addMat() {
    // this.matSerList.push(this.matServ);
    // this.matServ.material = this.material;
    // this.matServ.cantidad = this.cantidad;
    // this.matSerList = [this.matServ];
    this.tra.materiales = this.tra.materiales + "(" + this.material + " " + this.cantidad + "), ";
    // this.tra.materiales.push(this.matServ);
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/materialServicio').doc(this.tra.key + this.tra.cliente).set(this.tra)
        .then((res) => {
          resolve(res);
          this.modalCtrl.dismiss();
        }, err => reject(err))
    })

    // return new Promise<any>((resolve, reject) => {
    //   this.afs.collection('/trabajos').doc(this.tra.key + this.tra.cliente).set(this.tra)
    //     .then((res) => {
    //       resolve(res);
    //     }, err => reject(err))
    // })
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
            console.log('Salir sin guardar');
          }
        }, {
          text: 'Guardar',
          handler: () => {
            this.addMat();
            console.log('Guarado');
            this.modalCtrl.dismiss();
          }
        }
      ]
    });

    await alert.present();
  }

}
