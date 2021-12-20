
import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../user';
import { LoginServiceService } from './login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private service: LoginServiceService, private route:Router,private _snackBar: MatSnackBar,private activatedRoute: ActivatedRoute){

  }
  url:String;
  param:String
  utype:String;
  ngOnInit(): void {
    this.utype=this.activatedRoute.snapshot.paramMap.get('utype');
    if(this.utype=="admin"){
       this.url="/home";
       this.param="home";
    }else if(this.utype=="customer"){
      this.url="/ecom";
      
    }
  }
  user=new User();
  hide = true;
 msg:String;
  login(){
   
this.service.login(this.user).subscribe(
  data =>{this.user=data, this._snackBar.open('Welcome', this.user.uname.toString(), {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: 5 * 1000,
  });
  if(this.utype=="admin"){
  this.route.navigate([this.url,this.param]);
  }else if(this.utype=="customer"){
    this.route.navigate([this.url]);
  }
}
  ,
  error=>{console.log("exception occured")
this.msg="Wrong Id or Password"}
)
  }

}
