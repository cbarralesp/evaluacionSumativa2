import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})

export class Form3Component {

  datos!: string;
  products: any = [];
  

  formularioContacto = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    cantidad: new FormControl(''),
    descripcion: new FormControl(''),
    stock: new FormControl(''),
    precio: new FormControl('')
   
});

  public enviar() {

    this.products.push({
      codigo: this.formularioContacto.value.codigo,
      nombre:  this.formularioContacto.value.nombre,
      precio: this.formularioContacto.value.precio,
      cantidad: this.formularioContacto.value.cantidad,
      descripcion: this.formularioContacto.value.descripcion,
      stock: this.formularioContacto.value.stock
    });
    console.log(this.products);
  }

  eliminarTarea(index:number): void{
    this.products.splice(index,1);
  }
  

}
