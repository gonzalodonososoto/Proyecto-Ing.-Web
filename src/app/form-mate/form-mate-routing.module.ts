import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormMateComponent} from './form-mate.component';

const routes: Routes = [
  {
    path: '',
    component : FormMateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormMateRoutingModule { }
