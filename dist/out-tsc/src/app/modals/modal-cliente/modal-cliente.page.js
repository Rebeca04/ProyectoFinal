import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavParams, ModalController, ToastController, AlertController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
var ModalClientePage = /** @class */ (function () {
    function ModalClientePage(afs, navParmt, modalCtrl, toastCtrl, alertController) {
        this.afs = afs;
        this.navParmt = navParmt;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertController = alertController;
        this.exist = false;
        this.isUpdate = false;
        this.cli = navParmt.data.cliente;
        this.clientList = navParmt.data.listaCli;
        this.isUpdate = navParmt.data.isUpdt;
        // console.log(navParmt.data.cliente);
        // this.afs.collection('clientes').valueChanges().subscribe(clients => {
        //   this.clientList = clients;
        // });
    }
    ModalClientePage.prototype.ngOnInit = function () {
        this.ifExist();
        // crear boton update y metodo
    };
    ModalClientePage.prototype.goBack = function () {
        this.modalCtrl.dismiss();
    };
    ModalClientePage.prototype.updateUser = function () {
        console.log("isUpdate");
    };
    ModalClientePage.prototype.addUser = function (value) {
        var _this = this;
        this.ifExist();
        if (!this.exist) {
            return new Promise(function (resolve, reject) {
                _this.afs.collection('/clientes').doc(value.key + value.nombre).set(value)
                    .then(function (res) {
                    resolve(res);
                    _this.goBack();
                    _this.mostrarToast();
                }, function (err) { return reject(err); });
            });
        }
        else {
            this.presentAlert();
        }
    };
    ModalClientePage.prototype.deleteButton = function () {
        this.afs.collection("clientes").doc(this.cli.key + this.cli.nombre).delete();
    };
    ModalClientePage.prototype.ifExist = function () {
        var _this = this;
        this.clientList.forEach(function (cli) {
            if (cli.nombre == _this.cli.nombre) {
                _this.exist = true;
            }
        });
    };
    ModalClientePage.prototype.presentAlert = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Error',
                            subHeader: 'No se pudo guardar',
                            message: 'Ya hay un cliente con ese nombre.',
                            buttons: ['OK']
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
    ModalClientePage.prototype.mostrarToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: 'Cliente añadido.',
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
    ModalClientePage = tslib_1.__decorate([
        Component({
            selector: 'app-modal-cliente',
            templateUrl: './modal-cliente.page.html',
            styleUrls: ['./modal-cliente.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, NavParams, ModalController, ToastController, AlertController])
    ], ModalClientePage);
    return ModalClientePage;
}());
export { ModalClientePage };
//# sourceMappingURL=modal-cliente.page.js.map