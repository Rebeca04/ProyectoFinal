import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalClientePage } from './modal-cliente.page';
var routes = [
    {
        path: '',
        component: ModalClientePage
    }
];
var ModalClientePageModule = /** @class */ (function () {
    function ModalClientePageModule() {
    }
    ModalClientePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ModalClientePage]
        })
    ], ModalClientePageModule);
    return ModalClientePageModule;
}());
export { ModalClientePageModule };
//# sourceMappingURL=modal-cliente.module.js.map