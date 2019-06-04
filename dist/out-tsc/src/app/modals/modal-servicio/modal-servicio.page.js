import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
var ModalServicioPage = /** @class */ (function () {
    function ModalServicioPage(afs, navParmt, modalCtrl, toastCtrl) {
        this.afs = afs;
        this.navParmt = navParmt;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.ser = navParmt.data.servicio;
    }
    ModalServicioPage.prototype.ngOnInit = function () {
    };
    ModalServicioPage.prototype.goBack = function () {
        this.modalCtrl.dismiss();
    };
    ModalServicioPage.prototype.addUser = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.collection('/servicios').doc(value.key + value.nombre).set(value)
                .then(function (res) {
                resolve(res);
                _this.goBack();
                _this.mostrarToast();
            }, function (err) { return reject(err); });
        });
    };
    ModalServicioPage.prototype.deleteButton = function () {
        this.afs.collection("servicios").doc(this.ser.key + this.ser.nombre).delete();
    };
    ModalServicioPage.prototype.mostrarToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Servicio añadido.',
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
    ModalServicioPage = tslib_1.__decorate([
        Component({
            selector: 'app-modal-servicio',
            templateUrl: './modal-servicio.page.html',
            styleUrls: ['./modal-servicio.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, NavParams, ModalController, ToastController])
    ], ModalServicioPage);
    return ModalServicioPage;
}());
export { ModalServicioPage };
//# sourceMappingURL=modal-servicio.page.js.map