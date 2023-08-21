import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  dataform: FormGroup;

  constructor(private _fb: FormBuilder, private _dialog: MatDialog, public dialogRef: MatDialogRef<any>) {
    this.dataform = this._fb.group({
      id: '',
      ticket: '',
      assignedto: '',
      date: '',
      Status: '',
    })
  }
  onFormSubmit() {
    console.log(this.dataform.value);
    if (this.dataform.valid) {
      this.dialogRef.close(
        this.dataform.value
      )
    }

  }
   Status : string[] = [
    'open',
     'closed',
     'pending',
     
   ];
   
}
