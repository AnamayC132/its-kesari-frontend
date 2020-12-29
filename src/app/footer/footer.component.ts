import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  title:string;
  year:string;
  constructor() { }

  ngOnInit(): void {
    this.title="Anamay Pandey";
    this.year="2021";
  }
  



}
