import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent} from './inicio/inicioComponent';
import {SesionComponent} from './sesion/sesion.component';
import {FormMateComponent} from './form-mate/form-mate.component';
import {SumayRestaComponent} from './sumay-resta/sumay-resta.component';
import {MultiplicacionDivisionComponent} from './multiplicacion-division/multiplicacion-division.component';
import {FraccionesComponent} from './fracciones/fracciones.component';

const routes: Routes = [
  {
    path:'',
    component: InicioComponent,
  },
  {
    path: 'info',
    loadChildren:()=> import('./form-mate/form-mate.module').then(m=>m.FormMateModule)
  },
  {
    path:'sesion',
    component: SesionComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path : 'sumaresta',
    component: SumayRestaComponent,
  },
  {
    path : 'multidiv',
    component: MultiplicacionDivisionComponent,
  },
  {
    path : 'frac',
    component: FraccionesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
