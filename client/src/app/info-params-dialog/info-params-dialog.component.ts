import { Component, OnInit, Inject } from '@angular/core';
import { ChangeParamsPersonalityPageComponent } from '../change-params-personality-page/change-params-personality-page.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-info-params-dialog',
  templateUrl: './info-params-dialog.component.html',
  styleUrls: ['./info-params-dialog.component.scss']
})
export class InfoParamsDialogComponent implements OnInit {
  showDialog:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<ChangeParamsPersonalityPageComponent>,
    @Inject(MAT_DIALOG_DATA) public dataReceive: any
  ) { }

  ngOnInit() {
  }

  exit(){
    this.dialogRef.close(!this.showDialog);
  }

}
