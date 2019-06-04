import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalProveedorPage } from './modal-proveedor.page';
var routes = [
    {
        path: '',
        component: ModalProveedorPage
    }
];
var ModalProveedorPageModule = /** @class */ (function () {
    function ModalProveedorPageModule() {
    }
    ModalProveedorPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ModalProveedorPage]
        })
    ], ModalProveedorPageModule);
    return ModalProveedorPageModule;
}());
export { ModalProveedorPageModule };
//# sourceMappingURL=modal-proveedor.module.js.map