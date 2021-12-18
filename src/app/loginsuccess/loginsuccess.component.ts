import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {

  constructor( private route: ActivatedRoute) { }
uname:String
  ngOnInit(): void {
    this.uname=this.route.snapshot.paramMap.get('uname')
  }

}
