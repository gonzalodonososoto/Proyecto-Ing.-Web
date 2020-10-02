import { Component, OnInit } from '@angular/core';
import {RegistroService} from '../registro.service';
import {FormControl, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.less']
})
export class SesionComponent implements OnInit {

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
      usuario: new FormControl ('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required])
    });

  }

  onSubmit(){
    this.mensaje="datos completados";
    this.isDivVisible=true;
  }

  get usuario () { return this.checkoutForm.get('Usuario');}
  get password() { return this.checkoutForm.get('Password');}

}
