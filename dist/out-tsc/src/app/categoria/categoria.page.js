import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalCategoriaPage } from '../modals/modal-categoria/modal-categoria.page';
var CategoriaPage = /** @class */ (function () {
    function CategoriaPage(afs, navCtrl, modalController) {
        this.afs = afs;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.index = 0;
    }
    CategoriaPage.prototype.ngOnInit = function () {
        var _this = this;
        this.afs.collection('categorias').valueChanges().subscribe(function (cats) {
            _this.catList = cats;
        });
    };
    CategoriaPage.prototype.goBack = function () {
        this.navCtrl.navigateRoot("/home/material");
    };
    CategoriaPage.prototype.filterList = function (evt) {
        var _this = this;
        //Al ir borrando en el buscardor no va comparando si coincide y actualizando
        var searchTerm = evt.srcElement.value;
        if (!searchTerm) {
            this.afs.collection('categorias').valueChanges().subscribe(function (provs) {
                _this.catList = provs;
            });
            return;
        }
        this.catList = this.catList.filter(function (currentGoal) {
            if (currentGoal.nombre && searchTerm) {
                if (currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    return true;
                }
                return;
            }
        });
    };
    CategoriaPage.prototype.addProv = function () {
        this.cat = {
            nombre: "",
            descripcion: ""
        };
        this.presentModal();
    };
    CategoriaPage.prototype.deleteButton = function (prov) {
        this.afs.collection("categorias").doc(prov.key + prov.nombre).delete();
    };
    CategoriaPage.prototype.elementSetect = function (elementSelected) {
        this.valueSearch = elementSelected.nombre;
        this.cat = elementSelected;
        console.log(elementSelected);
        this.presentModal();
    };
    CategoriaPage.prototype.presentModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ModalCategoriaPage,
                            componentProps: { categoria: this.cat }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CategoriaPage = tslib_1.__decorate([
        Component({
            selector: 'app-categoria',
            templateUrl: './categoria.page.html',
            styleUrls: ['./categoria.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, NavController, ModalController])
    ], CategoriaPage);
    return CategoriaPage;
}());
export { CategoriaPage };
//# sourceMappingURL=categoria.page.js.map