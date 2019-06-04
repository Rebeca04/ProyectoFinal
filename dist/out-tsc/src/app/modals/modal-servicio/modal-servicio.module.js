import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalServicioPage } from './modal-servicio.page';
var routes = [
    {
        path: '',
        component: ModalServicioPage
    }
];
var ModalServicioPageModule = /** @class */ (function () {
    function ModalServicioPageModule() {
    }
    ModalServicioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ModalServicioPage]
        })
    ], ModalServicioPageModule);
    return ModalServicioPageModule;
}());
export { ModalServicioPageModule };
//# sourceMappingURL=modal-servicio.module.js.map