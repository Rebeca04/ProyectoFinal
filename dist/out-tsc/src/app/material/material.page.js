import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { ModalController } from '@ionic/angular';
import { ModalMaterialPage } from '../modals/modal-material/modal-material.page';
var MaterialPage = /** @class */ (function () {
    function MaterialPage(afs, navCtrl, modalController) {
        this.afs = afs;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.index = 0;
    }
    MaterialPage.prototype.ngOnInit = function () {
        var _this = this;
        this.afs.collection('materiales').valueChanges().subscribe(function (mats) {
            _this.matList = mats;
        });
        this.afs.collection('categorias').valueChanges().subscribe(function (cats) {
            _this.catList = cats;
        });
    };
    MaterialPage.prototype.goBack = function () {
        this.navCtrl.navigateRoot("home");
    };
    MaterialPage.prototype.filterList = function (evt) {
        var _this = this;
        //Al ir borrando en el buscardor no va comparando si coincide y acutalizando
        var searchTerm = evt.srcElement.value;
        if (!searchTerm) {
            this.afs.collection('materiales').valueChanges().subscribe(function (clients) {
                _this.matList = clients;
            });
            return;
        }
        this.matList = this.matList.filter(function (currentGoal) {
            if (currentGoal.nombre && searchTerm) {
                if (currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    return true;
                }
                return;
            }
        });
    };
    MaterialPage.prototype.addCat = function () {
        this.navCtrl.navigateRoot("/home/categoria");
    };
    MaterialPage.prototype.addMaterial = function () {
        this.mat = {
            nombre: "",
            descripcion: "",
            precio: "",
            stock: 0,
            categoria: this.cat,
            proveedor: this.prov
        };
        this.presentModal();
    };
    MaterialPage.prototype.deleteButton = function (mats) {
        this.afs.collection("materiales").doc(mats.key + mats.nombre).delete();
    };
    MaterialPage.prototype.elementSetect = function (elementSelected) {
        this.valueSearch = elementSelected.nombre;
        this.mat = elementSelected;
        console.log(elementSelected);
        this.presentModal();
    };
    MaterialPage.prototype.presentModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ModalMaterialPage,
                            componentProps: { material: this.mat }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MaterialPage = tslib_1.__decorate([
        Component({
            selector: 'app-material',
            templateUrl: './material.page.html',
            styleUrls: ['./material.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, NavController, ModalController])
    ], MaterialPage);
    return MaterialPage;
}());
export { MaterialPage };
//# sourceMappingURL=material.page.js.map