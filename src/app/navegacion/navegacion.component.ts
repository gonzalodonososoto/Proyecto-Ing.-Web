import { Component, OnInit } from '@angular/core';
import {ListaContenidos} from '../ListaContenidos';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.less']


})
export class NavegacionComponent implements OnInit {

  icono: string ="";
  Lista=ListaContenidos;

  constructor() { }

  ngOnInit(): void {
    if(this.Lista.find(valor=>valor.Estado==1) || this.Lista.find(valor=>valor.Estado==2))
    this.icono="email";
    else
     this.icono="mail_outline";
  }

}
