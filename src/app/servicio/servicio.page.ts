import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { ModalController } from '@ionic/angular';
import { Servicio } from '../models/servicio/servicio.iteface';
import { ModalServicioPage } from '../modals/modal-servicio/modal-servicio.page';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.page.html',
  styleUrls: ['./servicio.page.scss'],
})
export class ServicioPage implements OnInit {

  index: number = 0;

  valueSearch: any;

  serv: Servicio;

  public loadedGoalList: any[];
  public servList: any[];

  constructor(public afs: AngularFirestore, public navCtrl: NavController, public modalController: ModalController) { }

  ngOnInit() {
    this.afs.collection('servicios').valueChanges().subscribe(ser => {
      this.servList = ser;
    });
  }

  
  filterList(evt) {
    //Al ir borrando en el buscardor no va comparando si coincide y acutalizando
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      this.afs.collection('servicios').valueChanges().subscribe(servicios => {
        this.servList = servicios;
      });
      return;
    }

    this.servList = this.servList.filter(currentGoal => {
      if (currentGoal.nombre && searchTerm) {
        if (currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return;
      }
    });
  }

  addServicio() {
    this.serv = {
      nombre: "",
      precio: "",
      descripcion: ""
    };
    this.presentModal()
  }

  deleteButton(ser: Servicio) {
    this.afs.collection("servicios").doc(ser.key + ser.nombre).delete();
  }

  elementSetect(elementSelected) {
    this.valueSearch = elementSelected.nombre;
    this.serv = elementSelected;
    console.log(elementSelected);
    this.presentModal()
  }


  goBack() {
    this.navCtrl.navigateRoot("home");
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalServicioPage,
      componentProps: { servicio: this.serv }
    });
    return await modal.present();
  }
}
