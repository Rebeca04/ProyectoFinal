import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ServicioPage } from './servicio.page';
var routes = [
    {
        path: '',
        component: ServicioPage
    }
];
var ServicioPageModule = /** @class */ (function () {
    function ServicioPageModule() {
    }
    ServicioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ServicioPage]
        })
    ], ServicioPageModule);
    return ServicioPageModule;
}());
export { ServicioPageModule };
//# sourceMappingURL=servicio.module.js.map