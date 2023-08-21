import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'project3';

  constructor() {

  }
  // openDialog() {
  //   const dialogRef = this._dialog.open(DialogComponent, {

  //   });
  // }
}
