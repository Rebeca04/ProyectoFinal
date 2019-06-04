import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { ModalController } from '@ionic/angular';
import { ModalServicioPage } from '../modals/modal-servicio/modal-servicio.page';
var ServicioPage = /** @class */ (function () {
    function ServicioPage(afs, navCtrl, modalController) {
        this.afs = afs;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.index = 0;
    }
    ServicioPage.prototype.ngOnInit = function () {
        var _this = this;
        this.afs.collection('servicios').valueChanges().subscribe(function (ser) {
            _this.servList = ser;
        });
    };
    ServicioPage.prototype.goBack = function () {
        this.navCtrl.navigateRoot("home");
    };
    ServicioPage.prototype.filterList = function (evt) {
        var _this = this;
        //Al ir borrando en el buscardor no va comparando si coincide y acutalizando
        var searchTerm = evt.srcElement.value;
        if (!searchTerm) {
            this.afs.collection('servicios').valueChanges().subscribe(function (servicios) {
                _this.servList = servicios;
            });
            return;
        }
        this.servList = this.servList.filter(function (currentGoal) {
            if (currentGoal.nombre && searchTerm) {
                if (currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    return true;
                }
                return;
            }
        });
    };
    ServicioPage.prototype.addServicio = function () {
        this.serv = {
            nombre: "",
            precio: "",
            descripcion: ""
        };
        this.presentModal();
    };
    ServicioPage.prototype.deleteButton = function (ser) {
        this.afs.collection("servicios").doc(ser.key + ser.nombre).delete();
    };
    ServicioPage.prototype.elementSetect = function (elementSelected) {
        this.valueSearch = elementSelected.nombre;
        this.serv = elementSelected;
        console.log(elementSelected);
        this.presentModal();
    };
    ServicioPage.prototype.presentModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ModalServicioPage,
                            componentProps: { servicio: this.serv }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ServicioPage = tslib_1.__decorate([
        Component({
            selector: 'app-servicio',
            templateUrl: './servicio.page.html',
            styleUrls: ['./servicio.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, NavController, ModalController])
    ], ServicioPage);
    return ServicioPage;
}());
export { ServicioPage };
//# sourceMappingURL=servicio.page.js.map