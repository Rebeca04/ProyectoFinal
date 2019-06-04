import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavParams, ModalController, ToastController, AlertController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { formatDate } from '@angular/common';
import { ModalMaterialServicioPage } from '../modal-material-servicio/modal-material-servicio.page';
var ModalTrabajoPage = /** @class */ (function () {
    function ModalTrabajoPage(afs, navParmt, modalCtrl, modalController, toastCtrl, alertController) {
        this.afs = afs;
        this.navParmt = navParmt;
        this.modalCtrl = modalCtrl;
        this.modalController = modalController;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.statusAccept = false;
        this.statusFinal = false;
        this.disabledOption = true;
        this.statusPend = true;
        this.statusRech = true;
        this.statusAcep = true;
        this.statusFin = true;
        this.tra = navParmt.data.trabajo;
    }
    ModalTrabajoPage.prototype.ngOnInit = function () {
        var _this = this;
        //cargar clientes
        this.afs.collection('clientes').valueChanges().subscribe(function (clientes) {
            _this.cliList = clientes;
        });
        //cargar servicios
        this.afs.collection('servicios').valueChanges().subscribe(function (servicios) {
            _this.serList = servicios;
        });
        if (this.tra.estado == '' || this.tra.estado == 'pendiente') {
            this.statusAccept = false;
            this.statusPend = true;
            this.statusRech = true;
            this.statusAcep = true;
            this.statusFin = false;
        }
        else if (this.tra.estado == 'aceptada') {
            this.statusAccept = true;
            this.statusPend = false;
            this.statusRech = true;
            this.statusAcep = true;
            this.statusFin = true;
        }
        else if (this.tra.estado == 'finalizada') {
            this.statusAccept = false;
            this.statusPend = false;
            this.statusRech = false;
            this.statusAcep = false;
            this.statusFin = true;
        }
        else if (this.tra.estado == 'rechazada') {
            this.disabledOption = false;
        }
    };
    //Select-state
    ModalTrabajoPage.prototype.onChange = function (select) {
        this.selectState = select.target.value;
    };
    ModalTrabajoPage.prototype.goBack = function () {
        this.presentAlertConfirm();
    };
    ModalTrabajoPage.prototype.addUser = function () {
        var _this = this;
        if (this.selectState == '' || this.selectState == 'pendiente') {
            this.statusAccept = false;
            console.log("false");
        }
        else if (this.selectState == 'aceptada') {
            console.log("true");
            this.statusAccept = true;
            this.tra.fechaInicio = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en');
        }
        else if (this.selectState == 'finalizada') {
            this.statusAccept = true;
            this.tra.fechaFin = formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en');
        }
        else if (this.selectState == 'rechazada') {
            this.disabledOption = false;
        }
        return new Promise(function (resolve, reject) {
            _this.afs.collection('/trabajos').doc(_this.tra.key + _this.tra.cliente).set(_this.tra)
                .then(function (res) {
                resolve(res);
                _this.modalCtrl.dismiss();
                _this.mostrarToast();
            }, function (err) { return reject(err); });
        });
    };
    ModalTrabajoPage.prototype.deleteButton = function () {
        this.afs.collection("trabajos").doc(this.tra.key + this.tra.cliente).delete();
    };
    ModalTrabajoPage.prototype.addModalMaterial = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ModalMaterialServicioPage,
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
    ModalTrabajoPage.prototype.mostrarToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Trabajo añadido.',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalTrabajoPage.prototype.presentAlertConfirm = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Salir',
                            message: '¿Quiere salir sin guardar?',
                            buttons: [
                                {
                                    text: 'Salir',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        _this.modalCtrl.dismiss();
                                        console.log('Salir sin guardar');
                                    }
                                }, {
                                    text: 'Guardar',
                                    handler: function () {
                                        _this.addUser();
                                        console.log('Guarado');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ModalTrabajoPage = tslib_1.__decorate([
        Component({
            selector: 'app-modal-trabajo',
            templateUrl: './modal-trabajo.page.html',
            styleUrls: ['./modal-trabajo.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, NavParams, ModalController, ModalController, ToastController, AlertController])
    ], ModalTrabajoPage);
    return ModalTrabajoPage;
}());
export { ModalTrabajoPage };
//# sourceMappingURL=modal-trabajo.page.js.map