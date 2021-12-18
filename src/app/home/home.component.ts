import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  currentUrl: any;
  pages = new Map<string, string>();
  baseUrl:string="assets/home/";
  ngOnInit(): void {
    this.pages.set("b", "/erp"); 
    this.pages.set("baby", "/scm");
    this.pages.set("b1", "/crm");
    this.pages.set("b2", "/kms");
    
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

}
