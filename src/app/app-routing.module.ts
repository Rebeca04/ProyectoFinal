import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home/cliente', loadChildren: './cliente/cliente.module#ClientePageModule' },
  { path: 'home/cliente/modal-cliente', loadChildren: './modals/modal-cliente/modal-cliente.module#ModalClientePageModule' },
  { path: 'home/trabajo', loadChildren: './trabajo/trabajo.module#TrabajoPageModule' },
  { path: 'home/material', loadChildren: './material/material.module#MaterialPageModule' },
  { path: 'home/proveedor', loadChildren: './proveedor/proveedor.module#ProveedorPageModule' },
  { path: 'home/servicio', loadChildren: './servicio/servicio.module#ServicioPageModule' },
  { path: 'home/proveedor/modal-proveedor', loadChildren: './modals/modal-proveedor/modal-proveedor.module#ModalProveedorPageModule' },
  { path: 'home/categoria/modal-categoria', loadChildren: './modals/modal-categoria/modal-categoria.module#ModalCategoriaPageModule' },
  { path: 'home/categoria', loadChildren: './categoria/categoria.module#CategoriaPageModule' },
  { path: 'home/material/modal-material', loadChildren: './modals/modal-material/modal-material.module#ModalMaterialPageModule' },
  { path: 'home/servicio/modal-servicio', loadChildren: './modals/modal-servicio/modal-servicio.module#ModalServicioPageModule' },
  { path: 'modal-trabajo', loadChildren: './modals/modal-trabajo/modal-trabajo.module#ModalTrabajoPageModule' },
  { path: 'material-servicio', loadChildren: './material-servicio/material-servicio.module#MaterialServicioPageModule' },
  { path: 'modal-material-servicio', loadChildren: './modals/modal-material-servicio/modal-material-servicio.module#ModalMaterialServicioPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
