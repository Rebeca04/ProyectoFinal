import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CategoriaPage } from './categoria.page';
var routes = [
    {
        path: '',
        component: CategoriaPage
    }
];
var CategoriaPageModule = /** @class */ (function () {
    function CategoriaPageModule() {
    }
    CategoriaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CategoriaPage]
        })
    ], CategoriaPageModule);
    return CategoriaPageModule;
}());
export { CategoriaPageModule };
//# sourceMappingURL=categoria.module.js.map