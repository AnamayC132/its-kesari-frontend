import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit {
  public currentUrl: any;
  constructor() { }
  page:String

  ngOnInit(): void {
  }


}
