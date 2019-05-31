import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalMaterialServicioPage } from './modal-material-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: ModalMaterialServicioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalMaterialServicioPage]
})
export class ModalMaterialServicioPageModule {}
