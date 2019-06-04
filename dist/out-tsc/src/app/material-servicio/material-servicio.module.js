import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MaterialServicioPage } from './material-servicio.page';
var routes = [
    {
        path: '',
        component: MaterialServicioPage
    }
];
var MaterialServicioPageModule = /** @class */ (function () {
    function MaterialServicioPageModule() {
    }
    MaterialServicioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MaterialServicioPage]
        })
    ], MaterialServicioPageModule);
    return MaterialServicioPageModule;
}());
export { MaterialServicioPageModule };
//# sourceMappingURL=material-servicio.module.js.map