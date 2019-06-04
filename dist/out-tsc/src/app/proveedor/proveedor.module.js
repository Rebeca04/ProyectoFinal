import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProveedorPage } from './proveedor.page';
var routes = [
    {
        path: '',
        component: ProveedorPage
    }
];
var ProveedorPageModule = /** @class */ (function () {
    function ProveedorPageModule() {
    }
    ProveedorPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ProveedorPage]
        })
    ], ProveedorPageModule);
    return ProveedorPageModule;
}());
export { ProveedorPageModule };
//# sourceMappingURL=proveedor.module.js.map