import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { ModalClientePage } from './modals/modal-cliente/modal-cliente.page';
import { ModalProveedorPage } from './modals/modal-proveedor/modal-proveedor.page';
import { ModalCategoriaPage } from './modals/modal-categoria/modal-categoria.page';
import { ModalMaterialPage } from './modals/modal-material/modal-material.page';
import { ModalServicioPage } from './modals/modal-servicio/modal-servicio.page';

@NgModule({
  declarations: [AppComponent,ModalClientePage, ModalProveedorPage,ModalCategoriaPage, ModalMaterialPage, ModalServicioPage],
  entryComponents: [ModalClientePage, ModalProveedorPage,ModalCategoriaPage, ModalMaterialPage, ModalServicioPage],
  imports: [FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,],
  providers: [
    StatusBar,
    SplashScreen,
    
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
