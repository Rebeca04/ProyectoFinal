import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home/cliente', loadChildren: './cliente/cliente.module#ClientePageModule' },
  { path: 'home/modal-cliente', loadChildren: './modals/modal-cliente/modal-cliente.module#ModalClientePageModule' },
  { path: 'trabajo', loadChildren: './trabajo/trabajo.module#TrabajoPageModule' },
  { path: 'material', loadChildren: './material/material.module#MaterialPageModule' },
  { path: 'proveedor', loadChildren: './proveedor/proveedor.module#ProveedorPageModule' },
  { path: 'servicio', loadChildren: './servicio/servicio.module#ServicioPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
