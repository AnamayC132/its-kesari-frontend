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
  // pages:string[]=["brush","live_tv","games","face"];
  pages = new Map<string, string>();



  ngOnInit(): void {
    this.pages.set("brush", "/art"); 
    this.pages.set("games", "/gaming");
    this.pages.set("live_tv", "/entertainment");
    this.pages.set("face", "/anime");
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

}
