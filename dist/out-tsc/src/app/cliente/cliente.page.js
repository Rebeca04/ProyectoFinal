import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalClientePage } from '../modals/modal-cliente/modal-cliente.page';
var ClientePage = /** @class */ (function () {
    //listaUsers: Array<[]>;
    function ClientePage(afs, navCtrl, modalController) {
        this.afs = afs;
        this.navCtrl = navCtrl;
        this.modalController = modalController;
        this.index = 0;
        this.cli = {
            nombre: "",
            telefono: 0,
            direccion: ""
        };
        this.isUpdate = false;
    }
    ClientePage.prototype.ngOnInit = function () {
        var _this = this;
        this.afs.collection('clientes').valueChanges().subscribe(function (clients) {
            _this.clientList = clients;
        });
    };
    ClientePage.prototype.goBack = function () {
        this.navCtrl.navigateRoot("home");
    };
    // initializeItems(): void {
    //   this.clientList = this.loadedGoalList;
    // }
    ClientePage.prototype.filterList = function (evt) {
        var _this = this;
        //Al ir borrando en el buscardor no va comparando si coincide y acutalizando
        //this.initializeItems();
        var searchTerm = evt.srcElement.value;
        if (!searchTerm) {
            this.afs.collection('clientes').valueChanges().subscribe(function (clients) {
                _this.clientList = clients;
            });
            return;
        }
        this.clientList = this.clientList.filter(function (currentGoal) {
            if (currentGoal.nombre && searchTerm) {
                if (currentGoal.nombre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                    return true;
                }
                return;
            }
        });
    };
    ClientePage.prototype.addClient = function () {
        var _this = this;
        this.cli = {
            nombre: "",
            telefono: 0,
            direccion: ""
        };
        this.clientList.forEach(function (c) {
            if (c == 'idCli') {
                _this.idCli = c.id + 1;
                c.id = c.id + 1;
            }
        });
        console.log(this.clientList);
        this.presentModal();
    };
    ClientePage.prototype.deleteButton = function (clien) {
        this.afs.collection("clientes").doc(clien.key + clien.nombre).delete();
    };
    ClientePage.prototype.elementSetect = function (elementSelected) {
        this.valueSearch = elementSelected.nombre;
        this.cli = elementSelected;
        console.log(elementSelected);
        this.presentModal();
        this.isUpdate = true;
    };
    ClientePage.prototype.presentModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ModalClientePage,
                            componentProps: { cliente: this.cli, listaCli: this.clientList, isUpdt: this.isUpdate }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ClientePage = tslib_1.__decorate([
        Component({
            selector: 'app-cliente',
            templateUrl: './cliente.page.html',
            styleUrls: ['./cliente.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, NavController, ModalController])
    ], ClientePage);
    return ClientePage;
}());
export { ClientePage };
//# sourceMappingURL=cliente.page.js.map