import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavParams, AlertController, ModalController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
var ModalMaterialServicioPage = /** @class */ (function () {
    function ModalMaterialServicioPage(afs, navParmt, alertController, modalCtrl) {
        this.afs = afs;
        this.navParmt = navParmt;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.tra = navParmt.data.trabajo;
    }
    ModalMaterialServicioPage.prototype.ngOnInit = function () {
        var _this = this;
        this.afs.collection('materiales').valueChanges().subscribe(function (mate) {
            _this.matList = mate;
        });
    };
    ModalMaterialServicioPage.prototype.onChange = function (select) {
        this.matServ.material = select.target.value;
    };
    ModalMaterialServicioPage.prototype.goBack = function () {
        this.modalCtrl.dismiss();
    };
    ModalMaterialServicioPage.prototype.addUser = function () {
        var _this = this;
        this.tra.materiales.map(function (serv) {
            serv = _this.matServ;
        });
        return new Promise(function (resolve, reject) {
            _this.afs.collection('/trabajos').doc(_this.tra.key + _this.tra.cliente).set(_this.tra)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    ModalMaterialServicioPage.prototype.presentAlertConfirm = function () {
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
                                        _this.modalCtrl.dismiss();
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
    ModalMaterialServicioPage = tslib_1.__decorate([
        Component({
            selector: 'app-modal-material-servicio',
            templateUrl: './modal-material-servicio.page.html',
            styleUrls: ['./modal-material-servicio.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, NavParams, AlertController, ModalController])
    ], ModalMaterialServicioPage);
    return ModalMaterialServicioPage;
}());
export { ModalMaterialServicioPage };
//# sourceMappingURL=modal-material-servicio.page.js.map