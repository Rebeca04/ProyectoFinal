import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalMaterialPage } from './modal-material.page';
var routes = [
    {
        path: '',
        component: ModalMaterialPage
    }
];
var ModalMaterialPageModule = /** @class */ (function () {
    function ModalMaterialPageModule() {
    }
    ModalMaterialPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ModalMaterialPage]
        })
    ], ModalMaterialPageModule);
    return ModalMaterialPageModule;
}());
export { ModalMaterialPageModule };
//# sourceMappingURL=modal-material.module.js.map