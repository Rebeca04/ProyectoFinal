import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
var ModalProveedorPage = /** @class */ (function () {
    function ModalProveedorPage(afs, navParmt, modalCtrl, toastCtrl) {
        this.afs = afs;
        this.navParmt = navParmt;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.pro = navParmt.data.proveedor;
    }
    ModalProveedorPage.prototype.ngOnInit = function () {
    };
    ModalProveedorPage.prototype.goBack = function () {
        this.modalCtrl.dismiss();
    };
    ModalProveedorPage.prototype.addUser = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.collection('/proveedores').doc(value.key + value.nombre).set(value)
                .then(function (res) {
                resolve(res);
                _this.goBack();
                _this.mostrarToast();
            }, function (err) { return reject(err); });
        });
    };
    ModalProveedorPage.prototype.deleteButton = function () {
        this.afs.collection("proveedores").doc(this.pro.key + this.pro.nombre).delete();
    };
    ModalProveedorPage.prototype.mostrarToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Proveedor añadido.',
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
    ModalProveedorPage = tslib_1.__decorate([
        Component({
            selector: 'app-modal-proveedor',
            templateUrl: './modal-proveedor.page.html',
            styleUrls: ['./modal-proveedor.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, NavParams, ModalController, ToastController])
    ], ModalProveedorPage);
    return ModalProveedorPage;
}());
export { ModalProveedorPage };
//# sourceMappingURL=modal-proveedor.page.js.map