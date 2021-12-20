import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Orders } from '../orders';

@Component({
  selector: 'app-payment-dialogue',
  templateUrl: './payment-dialogue.component.html',
  styleUrls: ['./payment-dialogue.component.css']
})
export class PaymentDialogueComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Orders) { }

  ngOnInit(): void {
  }

}
