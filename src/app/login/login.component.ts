
import { Input, Component, Output, EventEmitter } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../user';
import { LoginServiceService } from './login-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service: LoginServiceService, private route:Router){

  }
  user=new User();
  hide = true;
 msg:String;
  login(){
   
this.service.login(this.user).subscribe(
  data =>{this.user=data,
  this.route.navigate(['/loginsuccess',this.user.uname])}
  ,
  error=>{console.log("exception occured")
this.msg="Wrong Id/Password"}
)
  }

}
