import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  
  constructor(private route: ActivatedRoute) { }
  page:String

  ngOnInit(): void {this.page=this.route.snapshot.paramMap.get('page')
  }


}
