import { Component, OnInit } from '@angular/core';
import { PersonalityService } from '../services/personality.service';
import {MatDialog, MatSnackBar} from '@angular/material';
import singleParam from '../services/singleParam';
import { NewAreaDialogComponent } from '../new-area-dialog/new-area-dialog.component';
import {saveAs} from 'file-saver/FileSaver';
import { InfoParamsDialogComponent } from '../info-params-dialog/info-params-dialog.component';

declare const $:any;

@Component({
  selector: 'app-change-params-personality-page',
  templateUrl: './change-params-personality-page.component.html',
  styleUrls: ['./change-params-personality-page.component.scss']
})
export class ChangeParamsPersonalityPageComponent implements OnInit {
  fileName: string;
  file: File;
  params: Array<any>;
  editParams:Array<any>;
  currentPage: number;
  paramsPage: Array<any>;
  pageSize:number;
  activeCtrl = {};

  private step:string = 'values';
  constructor(
    private snackBar: MatSnackBar,
    private personalityService: PersonalityService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.pageSize = 3;
    this.params = this.personalityService.getBaseParams();
    this.currentPage = 0;
    this.editParams = null;
    this.updatePage();
  }
  setToEdit(index) {
    const i= (this.currentPage * this.pageSize) + index;
    this.editParams = this.params[i];
    Object.keys(this.activeCtrl).forEach(element => {
      this.activeCtrl[element] = false;
    });
    this.activeCtrl[i] = true;
  }

  deleteArea(index) {
    const i= (this.currentPage * this.pageSize) + index;

    this.params.splice(i, 1);
    this.personalityService.setParams(this.params);
    this.updatePage();
    this.editParams = null;
  }

  editArea(){
    this.personalityService.setParams(this.params);
    this.snackBar.open('Alterações salvas com sucesso.', 'Fechar', {duration: 5000, panelClass: ['custom-snackbar']});
  }

  addArea(){
    let dialogRef = this.dialog.open(NewAreaDialogComponent, {
      width: '75%'
    });

    dialogRef.afterClosed().subscribe((res) => {
      if(res) {
        let toSave = Object.assign({}, singleParam);
        toSave.area = res;
        this.params.push(toSave);
        this.personalityService.setParams(this.params);
        this.snackBar.open('Parâmetro criado com sucesso.', 'Fechar', {duration: 5000, panelClass: ['custom-snackbar']});
        this.updatePage();
      }
    });
  }

  handlePage(e: any){
    this.currentPage = e.pageIndex;
    this.updatePage();
  }

  updatePage(){
    let init = (this.currentPage) * this.pageSize;
    let end = init + (this.pageSize);

    if(init >= this.params.length){
      this.currentPage--;
      init = (this.currentPage) * this.pageSize;
      end = init + (this.pageSize);
    }
    
    this.paramsPage = this.params.slice(init, end);
    this.editParams = null;
  }

  triggerInput(){
    $('#import-input').click();
  }

  importJSON(event: HTMLInputEvent){
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
      if(this.file.type != "application/json"){
        this.file = null;
        this.snackBar.open('Somente arquivos JSON são suportados.', 'Fechar', {duration: 5000, panelClass: ['custom-snackbar']});
      } else {
        let formData: FormData = new FormData();
        formData.append('upload', this.file, this.file.name);
        this.personalityService.importJSON(formData).subscribe((res) => {
          this.params = res;
          this.personalityService.setParams(this.params);
          this.snackBar.open('Parâmetros importados com sucesso.', 'Fechar', {duration: 5000, panelClass: ['custom-snackbar']});
        });
      }
    }
  }

  exportJSON(){
    const blob = new Blob([JSON.stringify(this.params)], { type: 'text/json' });
    const url= window.URL.createObjectURL(blob);
    saveAs(blob, 'params.json')
  }
}

/**
 * Interface for Input file event
 */
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}