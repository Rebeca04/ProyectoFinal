import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ModalTrabajoPage } from './modal-trabajo.page';
var routes = [
    {
        path: '',
        component: ModalTrabajoPage
    }
];
var ModalTrabajoPageModule = /** @class */ (function () {
    function ModalTrabajoPageModule() {
    }
    ModalTrabajoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ModalTrabajoPage]
        })
    ], ModalTrabajoPageModule);
    return ModalTrabajoPageModule;
}());
export { ModalTrabajoPageModule };
//# sourceMappingURL=modal-trabajo.module.js.map