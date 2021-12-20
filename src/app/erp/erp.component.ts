import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erp',
  templateUrl: './erp.component.html',
  styleUrls: ['./erp.component.css']
})
export class ErpComponent implements OnInit {
  public currentUrl: any;
  constructor() { }
  page:String

  ngOnInit(): void {
  }

}
