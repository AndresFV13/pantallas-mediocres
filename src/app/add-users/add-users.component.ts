import { Component, OnInit ,Input } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  @Input() editDisplay: boolean = false;

  addDisplay: boolean = false;

  constructor(){
  }

  ngOnInit(){}

  addUser( productEdit: Product ){
    this.addDisplay = true;
    this.editDisplay = false;
  }

  saveUser(){
    
  }

}
