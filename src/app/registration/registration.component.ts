import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private service: MainService, private route:Router) { }
  hide = true;
  user=new User();
  msg:String;
  ngOnInit(): void {
  }
  register(){
   
    this.service.register(this.user).subscribe(
      data =>{
      this.route.navigate(['/'])}
      ,
      error=>{
    this.msg="User Already Exist"}
    )
      }
}
