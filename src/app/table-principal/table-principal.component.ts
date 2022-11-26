import { Component, OnInit, Input } from '@angular/core';
import { flatMap } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-table-principal',
  templateUrl: './table-principal.component.html',
  styleUrls: ['./table-principal.component.css']
})
export class TablePrincipalComponent implements OnInit {

@Input()
  products: Product[] = [];

  display: boolean = false;
  addDisplay: boolean = false;
  deleteDisplay: boolean = false;
  editDisplay: boolean = false;

  productEdit : Product = {
    id: "",
    name: "",
    lastName: "",
    email: "",
    activo: "",
  }


  constructor(){
    this.editDisplay;
    this.products;
  }

  ngOnInit() {
    this.products = [
      {
        id: 987894,
        name: 'Sebastian',
        lastName: 'Quimabyo',
        email: 'correo@correo.com',
        activo: 'si'
      },
      {
        id: 868487,
        name: 'Andres',
        lastName: 'Vargas',
        email: 'correo@correo.com',
        activo: 'no'
      },
      {
        id: 546564,
        name: 'juan',
        lastName: 'Quimabyo',
        email: 'correo@correo.com',
        activo: 'si'
      },
      {
        id: 589641,
        name: 'carlos',
        lastName: 'Quimabyo',
        email: 'correo@correo.com',
        activo: 'si'
      },
      {
        id: 898955,
        name: 'Stiven',
        lastName: 'Quimabyo',
        email: 'correo@correo.com',
        activo: 'si'
      },
      {
        id: 896541,
        name: 'jorge',
        lastName: 'Quimabyo',
        email: 'correo@correo.com',
        activo: 'si'
      },
    ]
  }

  eliminar(){
    this.display = false;
    // idProduct: number parametro
    // let index = 0;s
    // for (const product of this.products) {
    //   if (product.id == idProduct){
    //     this.products.splice(index, index +1);
    //   }else{
    //     index ++;
    //   }
    // }
  }

  showDialog( product: Product ){
    this.editDisplay = true;
    this.addDisplay = false;
    this.productEdit = product
  }

  addUser( ){
    this.addDisplay = true;
    this.editDisplay = false;
  }

  editUser(){
    this.editDisplay = false;
  }

  saveUser(){
    this.addDisplay = false;
  }

  confirmation() {
    this.display = true;
}

}
