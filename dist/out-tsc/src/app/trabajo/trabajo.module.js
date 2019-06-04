import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TrabajoPage } from './trabajo.page';
var routes = [
    {
        path: '',
        component: TrabajoPage
    }
];
var TrabajoPageModule = /** @class */ (function () {
    function TrabajoPageModule() {
    }
    TrabajoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TrabajoPage]
        })
    ], TrabajoPageModule);
    return TrabajoPageModule;
}());
export { TrabajoPageModule };
//# sourceMappingURL=trabajo.module.js.map