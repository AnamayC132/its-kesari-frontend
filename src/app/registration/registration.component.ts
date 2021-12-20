import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../main.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private service: MainService, private route:Router,private _snackBar: MatSnackBar,private activatedRoute: ActivatedRoute) { }
  hide = true;
  user=new User();
  msg:String;
  ngOnInit(): void {
  }
  register(){
   
    this.service.register(this.user).subscribe(
      data =>{this.user=data, this._snackBar.open(this.user.uname.toString(), 'you are successfully registered', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 5 * 1000,
      });
      this.route.navigate(['/'])}
      ,
      error=>{
    this.msg="User Already Exist"}
    )
      }
}
