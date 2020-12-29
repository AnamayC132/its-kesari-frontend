import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() currentUrl;
  pages = new Map<string, string>();
  constructor() { }

    
  
  ngOnInit(): void {
    this.pages.set( "/art","Art Gallery:Go to art gallery home page"); 
    this.pages.set( "/gaming","Game Zone:Go to gaming home page");
    this.pages.set( "/entertainment","Movies & Shows:Go to movies home page");
    this.pages.set( "/anime","Anime Zone:Go to anime home page");
    this.pages.set( "/profile","Profile:Go to profile home page");
  }


}
