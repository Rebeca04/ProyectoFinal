import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalProveedorPage } from '../modals/modal-proveedor/modal-proveedor.page';
var ProveedorPage = /** @class */ (function () {
    function ProveedorPage(afs, navCtrl, modalController) {
        this.afs = afs;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.index = 0;
    }
    ProveedorPage.prototype.ngOnInit = function () {
        var _this = this;
        this.afs.collection('proveedores').valueChanges().subscribe(function (provs) {
            _this.provList = provs;
        });
    };
    ProveedorPage.prototype.goBack = function () {
        this.navCtrl.navigateRoot("home");
    };
    ProveedorPage.prototype.filterList = function (evt) {
        var _this = this;
        //Al ir borrando en el buscardor no va comparando si coincide y actualizando
        var searchTerm = evt.srcElement.value;
        if (!searchTerm) {
            this.afs.collection('proveedores').valueChanges().subscribe(function (provs) {
                _this.provList = provs;
            });
            return;
        }
        this.provList = this.provList.filter(function (currentGoal) {
            if (currentGoal.nombre && searchTerm) {
                if (currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    return true;
                }
                return;
            }
        });
    };
    ProveedorPage.prototype.addProv = function () {
        this.pro = {
            nombre: "",
            telefono: 0,
            direccion: "",
            nombreContacto: ""
        };
        this.presentModal();
    };
    ProveedorPage.prototype.deleteButton = function (prov) {
        this.afs.collection("proveedores").doc(prov.key + prov.nombre).delete();
    };
    ProveedorPage.prototype.elementSetect = function (elementSelected) {
        this.valueSearch = elementSelected.nombre;
        this.pro = elementSelected;
        console.log(elementSelected);
        this.presentModal();
    };
    ProveedorPage.prototype.presentModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ModalProveedorPage,
                            componentProps: { proveedor: this.pro }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProveedorPage = tslib_1.__decorate([
        Component({
            selector: 'app-proveedor',
            templateUrl: './proveedor.page.html',
            styleUrls: ['./proveedor.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, NavController, ModalController])
    ], ProveedorPage);
    return ProveedorPage;
}());
export { ProveedorPage };
//# sourceMappingURL=proveedor.page.js.map