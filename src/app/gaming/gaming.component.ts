import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css']
})
export class GamingComponent implements OnInit {
  isMobilePortrait:any
  isMobileLandscape=true;
  constructor( breakpointObserver: BreakpointObserver) { 
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.isMobilePortrait = result.matches;
    });
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape
    ]).subscribe(result => {
      this.isMobileLandscape = result.matches;
    });
  }
  urls = new Map<string, string>();
  ngOnInit(): void {
    
  }

}
