import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from 'angularfire2/firestore';
import { Cliente } from '../models/cliente/cliente.inteface';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalClientePage } from '../modals/modal-cliente/modal-cliente.page';
import { toUnicode } from 'punycode';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  index: number = 0;

  valueSearch: any;

  cli: Cliente = {
    nombre: "",
    telefono: 0,
    direccion: ""
  };
  idCli: any;

  public loadedGoalList: any[];
  public clientList: any[];
  numCli: number;
  isUpdate: boolean = false;

  //listaUsers: Array<[]>;

  constructor(public afs: AngularFirestore, public navCtrl: NavController, public modalController: ModalController) {
  }

  ngOnInit() {
    this.afs.collection('clientes').valueChanges().subscribe(clients => {
      this.clientList = clients;
    });
  }

  goBack() {
    this.navCtrl.navigateRoot("home");
  }

  // initializeItems(): void {
  //   this.clientList = this.loadedGoalList;
  // }

  filterList(evt) {
    //Al ir borrando en el buscardor no va comparando si coincide y acutalizando
    //this.initializeItems();
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      this.afs.collection('clientes').valueChanges().subscribe(clients => {
        this.clientList = clients;
      });
      return;
    }

    this.clientList = this.clientList.filter(currentGoal => {
      if (currentGoal.nombre && searchTerm) {
        if (currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return;
      }
    });
  }

  addClient() {
    this.cli = {
      nombre: "",
      telefono: 0,
      direccion: ""
    };
    this.clientList.forEach(c => {
      if (c == 'idCli') {
        this.idCli = c.id + 1;
        c.id = c.id + 1;
      }
    });
    this.isUpdate = false;
    console.log(this.clientList);
    this.presentModal()
  }

  deleteButton(clien: Cliente) {
    this.afs.collection("clientes").doc(clien.key + clien.nombre).delete();
  }

  elementSetect(elementSelected) {
    this.valueSearch = elementSelected.nombre;
    this.cli = elementSelected;
    console.log(elementSelected);
    this.isUpdate = true;
    this.presentModal()
  }

  async presentModal() {
    ///let idCli = this.clientList.length + 1;
    const modal = await this.modalController.create({
      component: ModalClientePage,
      componentProps: { cliente: this.cli, listaCli: this.clientList, isUpdt: this.isUpdate }
    });
    console.log(this.isUpdate)
    return await modal.present();
  }

}
