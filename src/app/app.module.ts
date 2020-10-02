import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { InicioComponent } from './inicio/inicioComponent';
import {MatIconModule} from '@angular/material/icon';
import { SesionComponent } from './sesion/sesion.component';
import { FormMateComponent } from './form-mate/form-mate.component';
import { FormsModule,ReactiveFormsModule}   from '@angular/forms';
import { SumayRestaComponent } from './sumay-resta/sumay-resta.component';
import { MultiplicacionDivisionComponent } from './multiplicacion-division/multiplicacion-division.component';
import { FraccionesComponent } from './fracciones/fracciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    InicioComponent,
    SesionComponent,
    SumayRestaComponent,
    MultiplicacionDivisionComponent,
    FraccionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
