import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-art-gallery',
  templateUrl: './art-gallery.component.html',
  styleUrls: ['./art-gallery.component.css']
})
export class ArtGalleryComponent implements OnInit {

  currentUrl: any;
  pages = new Map<string, string>();

  constructor(private router: Router) { }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit(): void {
    

    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

}
