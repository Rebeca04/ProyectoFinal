import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalTrabajoPage } from './modal-trabajo.page';

const routes: Routes = [
  {
    path: '',
    component: ModalTrabajoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalTrabajoPage]
})
export class ModalTrabajoPageModule {}
