
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import {ArtDialogComponent} from './art-dialog/art-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-art-category',
  templateUrl: './art-category.component.html',
  styleUrls: ['./art-category.component.css']
})
export class ArtCategoryComponent implements OnInit {
  currentRoute: any;
  currentImageUrl: string[] = [];
url:string;

  artMap = new Map<string, string[]>();
  constructor(private router: Router,public dialog: MatDialog) {

    this.currentRoute = router.url.split('/')[2];

  }

  automobileUrl: string[] = ["assets/car/car1.jpg", "assets/car/car2.jpg", "assets/car/car3.jpg",
    "assets/car/car4.jpg", "assets/car/car5.jpg"]
  caricaturesUrl: string[] = ["assets/caricatures/pup.jpg", "assets/caricatures/vote.jpg"]
  doodlesUrl: string[] = ["assets/doodles/do1.jpg", "assets/doodles/do2.jpg", "assets/doodles/do3.jpg"]

  portraitsUrl: string[] = ["assets/portraits/colorGirl.jpg","assets/portraits/colorGirl1.jpg",
  "assets/portraits/colorGirl2.jpg","assets/portraits/an1.jpg", "assets/portraits/dt1.jpg", "assets/portraits/dt2.jpg",
    "assets/portraits/dt3.jpg", "assets/portraits/dt4.jpg", "assets/portraits/dt5.jpg", "assets/portraits/hr1.jpg",
    "assets/portraits/hr2.jpg", "assets/portraits/ks.jpg", "assets/portraits/ni3.jpg", "assets/portraits/pa1.jpg",
    "assets/portraits/pa2.jpg", "assets/portraits/pa3.jpg", "assets/portraits/pa4.jpg", "assets/portraits/sj1.jpg",
    "assets/portraits/ssr.jpg", "assets/portraits/tr1.jpg", "assets/portraits/tr2.jpg", "assets/portraits/um1.jpg",
    "assets/portraits/um2.jpg", "assets/portraits/um3.jpg"]
  postersUrl: string[] = ["assets/posters/go1.jpg", "assets/posters/go2.jpg", "assets/posters/go3.jpg",
    "assets/posters/ra1.jpg", "assets/posters/ra2.jpg"]
  abstractUrl: string[] = ["assets/random/juari.jpg", "assets/random/love.jpg", "assets/random/ma1.jpg",
    "assets/random/ma2.jpg", "assets/random/pa1.jpg", "assets/random/tower.jpg"]

  ngOnInit(): void {

    this.artMap.set("automobileUrl", this.automobileUrl);
    this.artMap.set("postersUrl", this.postersUrl);
    this.artMap.set("portraitsUrl", this.portraitsUrl);
    this.artMap.set("caricaturesUrl", this.caricaturesUrl);
    this.artMap.set("doodlesUrl", this.doodlesUrl);
    this.artMap.set("abstractUrl", this.abstractUrl);

    for (var key of this.artMap) {
      if (key[0].startsWith(this.currentRoute)) {
        this.currentImageUrl = key[1];
      }

    }


  }
  openDialog(currentUrl:any) {
   
    const dialogRef = this.dialog.open(ArtDialogComponent, {
      
      data: {url: currentUrl}
    });
    }
  

 
}


