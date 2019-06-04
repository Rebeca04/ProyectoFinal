import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavParams, ModalController, ToastController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
var ModalMaterialPage = /** @class */ (function () {
    function ModalMaterialPage(afs, navParmt, modalCtrl, toastCtrl) {
        this.afs = afs;
        this.navParmt = navParmt;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.mat = navParmt.data.material;
    }
    ModalMaterialPage.prototype.ngOnInit = function () {
        var _this = this;
        //cargar categorias
        this.afs.collection('categorias').valueChanges().subscribe(function (cats) {
            _this.catList = cats;
        });
        //cargar proveedores
        this.afs.collection('proveedores').valueChanges().subscribe(function (provs) {
            _this.provList = provs;
        });
    };
    ModalMaterialPage.prototype.goBack = function () {
        this.modalCtrl.dismiss();
    };
    ModalMaterialPage.prototype.addUser = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.collection('/materiales').doc(value.key + value.nombre).set(value)
                .then(function (res) {
                resolve(res);
                _this.goBack();
                _this.mostrarToast();
            }, function (err) { return reject(err); });
        });
    };
    ModalMaterialPage.prototype.deleteButton = function () {
        this.afs.collection("materiales").doc(this.mat.key + this.mat.nombre).delete();
    };
    ModalMaterialPage.prototype.mostrarToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Material añadido.',
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
    ModalMaterialPage = tslib_1.__decorate([
        Component({
            selector: 'app-modal-material',
            templateUrl: './modal-material.page.html',
            styleUrls: ['./modal-material.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, NavParams, ModalController, ToastController])
    ], ModalMaterialPage);
    return ModalMaterialPage;
}());
export { ModalMaterialPage };
//# sourceMappingURL=modal-material.page.js.map