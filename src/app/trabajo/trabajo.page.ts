import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { ModalController } from '@ionic/angular';
import { Trabajo } from '../models/trabajo/trabajo.inteface';
import { Cliente } from '../models/cliente/cliente.inteface';
import { Servicio } from '../models/servicio/servicio.iteface';
import { ModalTrabajoPage } from '../modals/modal-trabajo/modal-trabajo.page';


@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.page.html',
  styleUrls: ['./trabajo.page.scss'],
})
export class TrabajoPage implements OnInit {

  valueSearch: any;

  tra: Trabajo;
  cli: Cliente;
  ser: Servicio;

  public loadedGoalList: any[];
  public trabList: any[];

  public estaList: Array<any>;

  constructor(public afs: AngularFirestore, public navCtrl: NavController, public modalController: ModalController) { 
  }

  ngOnInit() {
    this.afs.collection('trabajos').valueChanges().subscribe(trabajos => {
      this.trabList = trabajos;
      this.estaList = ['Pendiente', 'Aceptada', 'Finalizada', 'Rechazada'];
    });
  }

  goBack() {
    this.navCtrl.navigateRoot("home");
  }

  filterList(evt) {
    //Al ir borrando en el buscardor no va comparando si coincide y acutalizando
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      this.afs.collection('trabajos').valueChanges().subscribe(trabajos => {
        this.trabList = trabajos;
      });
      return;
    }

    this.trabList = this.trabList.filter(currentGoal => {
      if (currentGoal.nombre && searchTerm) {
        if (currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return;
      }
    });
  }

  addTrabajo() {
    this.tra = {
      cliente: this.cli,
      servicio: this.ser,
      estado: "pendiente",
      fechaInicio: "00/00/0000",
      fechaFin: "00/00/0000"
    };
    this.presentModal()
  }

  deleteButton(trab: Trabajo) {
    this.afs.collection("trabajos").doc(trab.key + trab.cliente).delete();
  }

  elementSetect(elementSelected) {
    this.valueSearch = elementSelected.nombre;
    this.tra = elementSelected;
    console.log(elementSelected);
    this.presentModal()
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalTrabajoPage,
      componentProps: { trabajo: this.tra }
    });
    return await modal.present();
  }
}
