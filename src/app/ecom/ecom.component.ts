import { Component, OnInit, Inject } from '@angular/core';
import { MainService } from '../main.service';

import { Product } from '../product';
import { User } from '../user';
import { Address } from '../address';
import { Orders } from '../orders';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PaymentDialogueComponent } from '../payment-dialogue/payment-dialogue.component';

@Component({
  selector: 'app-ecom',
  templateUrl: './ecom.component.html',
  styleUrls: ['./ecom.component.css']
})
export class EcomComponent implements OnInit {
public url:String;
public email:String;
public carts: Product[]=[];
msg:String;
address=new Address();
orders=new Orders();
user1=new User();
user=new User();
  constructor(private service: MainService,public dialog: MatDialog) { }
  public products:Product[];
  public baseUrl:string="assets/ecom/";
  
  openDialog() {
    this.dialog.open(PaymentDialogueComponent, {
      data:{}
    
    });
  }

  ngOnInit(): void {
    
    this.carts=[];
this.service.getProducts().subscribe(
  data =>{
    this.products=data,
    console.log(this.products[0].pname)}
  ,
  error=>{
}
)
}

addToCart(prod:Product){

  this.carts.push(prod);


}
remove(cart:Product){
  
    const index: number = this.carts.indexOf(cart);
    if (index !== -1) {
        this.carts.splice(index, 1);
    }        

}
getUserByEmail(email:String){
this.service.getUserByEmail(email).subscribe(
  data =>{
    this.user=data, this.orders.oname=this.user.uname,this.orders.email=this.user.email;
    }
  ,
  error=>{
}
)
}
pay(){
  this.getUserByEmail(this.user1.email);
  
  this.orders.products=this.carts;
  this.orders.address=this.address;
  console.log(this.orders);
this.service.payNow(this.orders).subscribe(
  data =>{
    this.msg=data,
    console.log(this.msg)}
  ,
  error=>{
}
)
}
  }

