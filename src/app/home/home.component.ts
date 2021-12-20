import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute) { }
 page:String
  public pages = new Map<string, string>();
  public baseUrl:string="assets/home/";
  ngOnInit(): void {
    this.pages.set("erp", "/erp"); 
    this.pages.set("scm", "/scm");
    this.pages.set("crm", "/crm");
    this.pages.set("kms", "/kms");
    this.page=this.route.snapshot.paramMap.get('page');
    
  }

}
