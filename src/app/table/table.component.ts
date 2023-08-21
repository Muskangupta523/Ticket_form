import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { DialogComponent } from '../dialog/dialog.component';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  Icon = faTrash;
  edit = faEdit;
  displayedColumns: string[] = ['id', 'ticket', 'assignedto', 'date','Status','action'];
  Data:{id:number; ticket:string; assignedto:string; date:string; Status:string}[]=[];
  
  dataSource: any[] = []
  currentIndex:any;
 

  constructor(private _dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.loaditems()
    console.log(this.dataSource)
  }

  loaditems() {
    const items = localStorage.getItem('dataform');
    if (items) {
      this.dataSource = JSON.parse(items);
    }
  }
  

  openDialog() {
    const dialogRef = this._dialog.open(DialogComponent, {
      // data: {updateItem: this.dataSource,
      //   indexOfData: -1}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.dataSource = [...this.dataSource, result]
      localStorage.setItem('dataform', JSON.stringify([...this.dataSource]));
     
    });
  }

  
  deleteitem(id: number) {
    console.log('Deleting item with id:', id);
  
    this.dataSource.splice(id, 1);
    console.log('Updated dataSource:', this.dataSource);
  
    localStorage.setItem('dataform', JSON.stringify(this.dataSource));
    console.log('Local storage updated with:', this.dataSource);
  }
  // delete(index:any){
  //   this.dataSource.splice(index,1);

  // }

  // Edit(dataSource:any,index:any){
  //   this.isUpdate=true;
  //   this.currentIndex=index;
  //   this.formData.setValue(dataSource);


  // }

}


