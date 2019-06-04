import * as tslib_1 from "tslib";
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
import { ModalTrabajoPage } from './modals/modal-trabajo/modal-trabajo.page';
import { ModalMaterialServicioPage } from './modals/modal-material-servicio/modal-material-servicio.page';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent, ModalClientePage, ModalProveedorPage, ModalCategoriaPage, ModalMaterialPage, ModalServicioPage, ModalTrabajoPage, ModalMaterialServicioPage],
            entryComponents: [ModalClientePage, ModalProveedorPage, ModalCategoriaPage, ModalMaterialPage, ModalServicioPage, ModalTrabajoPage, ModalMaterialServicioPage],
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
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map