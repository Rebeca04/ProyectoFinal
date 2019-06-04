import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalMaterialServicioPage } from './modal-material-servicio.page';
var routes = [
    {
        path: '',
        component: ModalMaterialServicioPage
    }
];
var ModalMaterialServicioPageModule = /** @class */ (function () {
    function ModalMaterialServicioPageModule() {
    }
    ModalMaterialServicioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ModalMaterialServicioPage]
        })
    ], ModalMaterialServicioPageModule);
    return ModalMaterialServicioPageModule;
}());
export { ModalMaterialServicioPageModule };
//# sourceMappingURL=modal-material-servicio.module.js.map