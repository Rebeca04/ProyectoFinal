import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FirebaseDatabase, FirebaseStorage } from 'angularfire2';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente/cliente.inteface';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  valueSearch: any; 

  cli: Cliente = {
    nombre: "",
    telefono: 0,
    direccion: ""
  };

  // itemsCollection: AngularFirestoreCollection<Items>;
  //items: Observable<Items[]>;
  // varia: Observable<Items[]>;

  public goalList: any[];
  public loadedGoalList: any[];

  listaUsers: Array<[]>;

  constructor(
    public afs: AngularFirestore
  ) {
    this.ngOnInit();
    //this.itemsCollection = this.afs.collection("users");
    //this.varia = this.itemsCollection.valueChanges();
    //this.afs.collection("users").get().forEach( doc =>  doc.forEach( us => console.log(us)));
    //this.items = this.itemsCollection.valueChanges();

    // this.items = this.itemsCollection.get().forEach( doc => { 
    //   'surname', '==', 'Barton';
    // });
    // this.items.forEach(users => {
    //   users.forEach(user => {
    //     if (user.surname = "Barton") {
    //       console.log(this.afs.collection("users").doc("").valueChanges())

    //     }
    //   })
    // });
    //for (const key in this.items) {
    //if (this.items.hasOwnProperty(key)) {
    //const element = this.items[key].name;
    //}
    //} 
  }

  filterList(evt) {
    this.initializeItems();
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      return;
    }

    this.goalList = this.goalList.filter(currentGoal => {
      if (currentGoal.nombre && searchTerm) {
        if (currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  }

  ngOnInit() {
    this.afs.collection('users').valueChanges().subscribe(goalList => {
      this.goalList = goalList;
      this.loadedGoalList = goalList;
    });
  }
  initializeItems(): void {
    this.goalList = this.loadedGoalList;
  }

  elementSetect(elementSelected){
    this.valueSearch= elementSelected;
  }

  addUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('/users').doc(value.key + value.nombre).set(value)
        .then((res) => {
          resolve(res)
        }, err => reject(err))
    })
  }


}
