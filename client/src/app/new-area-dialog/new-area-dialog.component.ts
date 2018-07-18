import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ChangeParamsPersonalityPageComponent } from '../change-params-personality-page/change-params-personality-page.component';

@Component({
  selector: 'app-new-area-dialog',
  templateUrl: './new-area-dialog.component.html',
  styleUrls: ['./new-area-dialog.component.scss']
})
export class NewAreaDialogComponent implements OnInit {
  areaName:string;

  constructor(
    public dialogRef: MatDialogRef<ChangeParamsPersonalityPageComponent>,
    @Inject(MAT_DIALOG_DATA) public dataReceive: any
  ) { }

  ngOnInit() {
    this.areaName = '';
  }

  close(param){
    this.dialogRef.close(param);
  }
}
