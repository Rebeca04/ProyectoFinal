import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ClientePage } from '../cliente/cliente.page';
import { NavController } from '@ionic/angular';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.clientesPag = ClientePage;
    }
    HomePage.prototype.ngOnInit = function () { };
    HomePage.prototype.pushTrabajo = function () {
        this.navCtrl.navigateRoot("/home/trabajo");
    };
    HomePage.prototype.pushMaterial = function () {
        this.navCtrl.navigateRoot("/home/material");
    };
    HomePage.prototype.pushCliente = function () {
        this.navCtrl.navigateRoot("/home/cliente");
    };
    HomePage.prototype.pushProveedor = function () {
        this.navCtrl.navigateRoot("/home/proveedor");
    };
    HomePage.prototype.pushServicio = function () {
        this.navCtrl.navigateRoot("/home/servicio");
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map