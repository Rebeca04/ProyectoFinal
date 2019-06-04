import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MaterialPage } from './material.page';
var routes = [
    {
        path: '',
        component: MaterialPage
    }
];
var MaterialPageModule = /** @class */ (function () {
    function MaterialPageModule() {
    }
    MaterialPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MaterialPage]
        })
    ], MaterialPageModule);
    return MaterialPageModule;
}());
export { MaterialPageModule };
//# sourceMappingURL=material.module.js.map