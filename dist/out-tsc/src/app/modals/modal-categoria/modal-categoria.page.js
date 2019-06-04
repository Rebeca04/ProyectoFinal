import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
var ModalCategoriaPage = /** @class */ (function () {
    function ModalCategoriaPage(afs, navParmt, modalCtrl, toastCtrl) {
        this.afs = afs;
        this.navParmt = navParmt;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.cat = navParmt.data.categoria;
    }
    ModalCategoriaPage.prototype.ngOnInit = function () {
    };
    ModalCategoriaPage.prototype.goBack = function () {
        this.modalCtrl.dismiss();
    };
    ModalCategoriaPage.prototype.addUser = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.collection('/categorias').doc(_this.cat.key + _this.cat.nombre).set(_this.cat)
                .then(function (res) {
                resolve(res);
                _this.modalCtrl.dismiss();
                _this.mostrarToast();
            }, function (err) { return reject(err); });
        });
    };
    ModalCategoriaPage.prototype.deleteButton = function () {
        this.afs.collection("categorias").doc(this.cat.key + this.cat.nombre).delete();
    };
    ModalCategoriaPage.prototype.mostrarToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Categoría añadida.',
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
    ModalCategoriaPage = tslib_1.__decorate([
        Component({
            selector: 'app-modal-categoria',
            templateUrl: './modal-categoria.page.html',
            styleUrls: ['./modal-categoria.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, NavParams, ModalController, ToastController])
    ], ModalCategoriaPage);
    return ModalCategoriaPage;
}());
export { ModalCategoriaPage };
//# sourceMappingURL=modal-categoria.page.js.map