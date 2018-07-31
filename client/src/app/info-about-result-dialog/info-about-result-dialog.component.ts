import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource, MatSort } from '@angular/material';
import { MainPersonalityPageComponent } from '../main-personality-page/main-personality-page.component';

@Component({
  selector: 'app-info-about-result-dialog',
  templateUrl: './info-about-result-dialog.component.html',
  styleUrls: ['./info-about-result-dialog.component.scss']
})
export class InfoAboutResultDialogComponent implements OnInit {
  data:Array<Object>;
  @ViewChild(MatSort) sort: MatSort;
  dataSource:any;
  displayedColumns: string[] = ['area', 'points'];
  
  constructor(
    public dialogRef: MatDialogRef<MainPersonalityPageComponent>,
    @Inject(MAT_DIALOG_DATA) public dataReceive: any
  ) {
    if (dataReceive) {
      this.data = dataReceive.data;
      this.dataSource = new MatTableDataSource(this.data);
    }
  }
  
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  exit(){
    this.dialogRef.close();
  }

}
