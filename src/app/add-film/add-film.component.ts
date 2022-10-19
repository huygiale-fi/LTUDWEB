import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent  {
  food:string | undefined 
  constructor(
    public dialogRef: MatDialogRef<AddFilmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.food = 'aa'
   }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
