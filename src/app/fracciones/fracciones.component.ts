import { Component, OnInit } from '@angular/core';
import {RegistroService} from '../registro.service';
import {FormControl, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-fracciones',
  templateUrl: './fracciones.component.html',
  styleUrls: ['./fracciones.component.less']
})
export class FraccionesComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje: string="";
  isDivVisible=false;

  constructor(private servicioRegistro:RegistroService) {
    
    this.checkoutForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }

  createFormGroup(){
    return new FormGroup({
      
      respuesta: new FormControl('',[Validators.required,Validators.pattern("0-9")]),
    
    })
  }      

  onSubmit(){
    this.mensaje="Respuesta Registrada";
  this.isDivVisible=true;
 }

 get respuesta () {return this.checkoutForm.get('Respuesta')}


}
