import { Component, OnInit } from '@angular/core';
import { PersonalityService } from '../services/personality.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import singleParam from '../services/singleParam';
import { NewAreaDialogComponent } from '../new-area-dialog/new-area-dialog.component';

@Component({
  selector: 'app-change-params-personality-page',
  templateUrl: './change-params-personality-page.component.html',
  styleUrls: ['./change-params-personality-page.component.scss']
})
export class ChangeParamsPersonalityPageComponent implements OnInit {
  params;
  editParams:Array<any>;

  private step:string = 'values';
  constructor(
    private snackBar: MatSnackBar,
    private personalityService: PersonalityService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.params = this.personalityService.getBaseParams();
    this.editParams = null;
  }

  setToEdit(index) {
    this.editParams = this.params[index];
  }

  deleteArea(index) {
    this.params.splice(index, 1);
    this.personalityService.setParams(this.params);
  }

  editArea(){
    this.personalityService.setParams(this.params);
  }

  addArea(){
    let dialogRef = this.dialog.open(NewAreaDialogComponent, {
      width: '75%'
    });

    dialogRef.afterClosed().subscribe((res) => {
      if(res) {
        singleParam.area = res;
        this.params.push(singleParam);
        this.personalityService.setParams(this.params);
        this.snackBar.open('Parâmetro criado com sucesso.', 'Fechar', {duration: 5000});
      }
    });
  }
}
