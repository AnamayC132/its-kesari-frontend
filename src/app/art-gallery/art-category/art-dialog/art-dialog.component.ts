import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  url: string;
}
@Component({
  selector: 'app-art-dialog',
  templateUrl: './art-dialog.component.html',
  styleUrls: ['./art-dialog.component.css']
})
export class ArtDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<ArtDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
 
  ngOnInit(): void {
  }

}
