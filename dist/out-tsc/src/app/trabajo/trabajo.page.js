import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { ModalController } from '@ionic/angular';
import { ModalTrabajoPage } from '../modals/modal-trabajo/modal-trabajo.page';
var TrabajoPage = /** @class */ (function () {
    function TrabajoPage(afs, navCtrl, modalController) {
        this.afs = afs;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
    }
    TrabajoPage.prototype.ngOnInit = function () {
        var _this = this;
        this.afs.collection('trabajos').valueChanges().subscribe(function (trabajos) {
            _this.trabList = trabajos;
            _this.estaList = ['Pendiente', 'Aceptada', 'Finalizada', 'Rechazada'];
        });
    };
    TrabajoPage.prototype.goBack = function () {
        this.navCtrl.navigateRoot("home");
    };
    TrabajoPage.prototype.filterList = function (evt) {
        var _this = this;
        //Al ir borrando en el buscardor no va comparando si coincide y acutalizando
        var searchTerm = evt.srcElement.value;
        if (!searchTerm) {
            this.afs.collection('trabajos').valueChanges().subscribe(function (trabajos) {
                _this.trabList = trabajos;
            });
            return;
        }
        this.trabList = this.trabList.filter(function (currentGoal) {
            if (currentGoal.nombre && searchTerm) {
                if (currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    return true;
                }
                return;
            }
        });
    };
    TrabajoPage.prototype.addTrabajo = function () {
        this.tra = {
            cliente: this.cli,
            servicio: this.ser,
            estado: "pendiente",
            fechaInicio: "00/00/0000",
            fechaFin: "00/00/0000",
            materiales: null
        };
        this.presentModal();
    };
    TrabajoPage.prototype.deleteButton = function (trab) {
        this.afs.collection("trabajos").doc(trab.key + trab.cliente).delete();
    };
    TrabajoPage.prototype.elementSetect = function (elementSelected) {
        this.valueSearch = elementSelected.nombre;
        this.tra = elementSelected;
        console.log(elementSelected);
        this.presentModal();
    };
    TrabajoPage.prototype.presentModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ModalTrabajoPage,
                            componentProps: { trabajo: this.tra }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TrabajoPage = tslib_1.__decorate([
        Component({
            selector: 'app-trabajo',
            templateUrl: './trabajo.page.html',
            styleUrls: ['./trabajo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, NavController, ModalController])
    ], TrabajoPage);
    return TrabajoPage;
}());
export { TrabajoPage };
//# sourceMappingURL=trabajo.page.js.map