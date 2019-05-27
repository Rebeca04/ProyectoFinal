import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController, ToastController  } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Material } from 'src/app/models/material/material.inteface';
import { Categoria } from 'src/app/models/categoria/categoria.inteface';
import { Proveedor } from 'src/app/models/proveedor/proveedor.inteface';

@Component({
  selector: 'app-modal-material',
  templateUrl: './modal-material.page.html',
  styleUrls: ['./modal-material.page.scss'],
})
export class ModalMaterialPage implements OnInit {
  
  public matList: any[];
  public catList: any[];
  public provList: any[];
  mat: Material;
  cat: Categoria;
  prov: Proveedor;

  constructor(public afs: AngularFirestore, public navParmt: NavParams, public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.mat = navParmt.data.material;
  }

  ngOnInit() {
    //cargar categorias
    this.afs.collection('categorias').valueChanges().subscribe(cats => {
      this.catList = cats;
    });

    //cargar proveedores
    this.afs.collection('proveedores').valueChanges().subscribe(provs => {
      this.provList = provs;
    });
  }

  goBack() {
    this.modalCtrl.dismiss();
  }

  addUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/materiales').doc(value.key + value.nombre).set(value)
        .then((res) => {
          resolve(res);
          this.goBack();
          this.mostrarToast();
        }, err => reject(err))
    })
  }

  deleteButton() {
    this.afs.collection("materiales").doc(this.mat.key + this.mat.nombre).delete();
  }

  async mostrarToast() {
    const toast = await this.toastCtrl.create({
      message: 'Material añadido.',
      duration: 3000
    });
    toast.present();
  }
}
