import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalCategoriaPage } from './modal-categoria.page';
var routes = [
    {
        path: '',
        component: ModalCategoriaPage
    }
];
var ModalCategoriaPageModule = /** @class */ (function () {
    function ModalCategoriaPageModule() {
    }
    ModalCategoriaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ModalCategoriaPage]
        })
    ], ModalCategoriaPageModule);
    return ModalCategoriaPageModule;
}());
export { ModalCategoriaPageModule };
//# sourceMappingURL=modal-categoria.module.js.map