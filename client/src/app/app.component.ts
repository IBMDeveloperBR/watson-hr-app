import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { InfoParamsDialogComponent } from './info-params-dialog/info-params-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showInfo:boolean = true;

  constructor(
    private dialog: MatDialog
  ) { }

  changeTab(e) {
    if(e.index == 1 && this.showInfo) {
      const initialDialog = this.dialog.open(InfoParamsDialogComponent, {
        width: '75%'
      });
      initialDialog.afterClosed().subscribe((res) => {
        if(res == undefined) {
          this.showInfo = true;
        } else {
          this.showInfo = res;
        }
      })
    }
  }
}
