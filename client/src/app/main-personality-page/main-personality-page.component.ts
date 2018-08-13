import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { PersonalityService } from '../services/personality.service';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';
import { InfoAboutResultDialogComponent } from '../info-about-result-dialog/info-about-result-dialog.component';

declare const $;

@Component({
  selector: 'app-main-personality-page',
  templateUrl: './main-personality-page.component.html',
  styleUrls: ['./main-personality-page.component.scss']
})
export class MainPersonalityPageComponent implements OnInit {
  selectedLanguage:string;
  result:any;
  fileName:string;
  sended:boolean;
  file:File;
  areaResult:string;

  displayCharts:boolean;
  personalityRawData:Array<Object>;
  needsRawData:Array<Object>;
  valuesRawData:Array<Object>;
  resObject:any;

  constructor(
    private snackBar: MatSnackBar,
    private personalityService: PersonalityService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.resetVariables();
  }

  resetVariables(){
    this.selectedLanguage = '';
    this.fileName = '';
    this.areaResult = '';
    this.sended = true;
    this.result = [];
    this.file = null;
    this.displayCharts = false;
    this.initRawDataArrays();
  }

  initRawDataArrays(){
    this.personalityRawData = [];
    this.needsRawData = [];
    this.valuesRawData = [];
  }

  extractData(){
    this.result.personality.forEach(element => {
      this.personalityRawData.push({
        name: element.name,
        value: (parseFloat(element.percentile)).toFixed(2)
      })
    });
    this.result.needs.forEach(element => {
      this.needsRawData.push({
        name: element.name,
        value: (parseFloat(element.percentile)).toFixed(2)
      })
    });
    this.result.values.forEach(element => {
      this.valuesRawData.push({
        name: element.name,
        value: (parseFloat(element.percentile)).toFixed(2)
      })
    });
  }
  
  openDialog(){
    let dialogRef = this.dialog.open(UploadDialogComponent, {
      width: '75%'
    });

    dialogRef.afterClosed().subscribe((res) => {
      if(res) {
        this.file = res.file;
        this.fileName = res.file.name;
        this.selectedLanguage = res.lang;
      }
    });

  }

  sendFile(){
    if(this.file == null){
      this.snackBar.open('Você deve selecionar um arquivo primeiro.', 'Fechar', {duration: 5000, panelClass: ['custom-snackbar']});
      return;
    }
    if(this.selectedLanguage == ''){
      this.snackBar.open('Você deve selecionar um idioma primeiro.', 'Fechar', {duration: 5000, panelClass: ['custom-snackbar']});
      return;
    }
    this.sended = true;
    let formData: FormData = new FormData();
    formData.append('upload', this.file, this.file.name);
    formData.append('lang', this.selectedLanguage);
    this.initRawDataArrays();
    this.personalityService.getPersonality(formData).subscribe(
      data => { 
        this.sended = false;
        this.result = data.resultPersonality;
        this.extractData();
        this.resObject = this.personalityService.runAnalysis(this.personalityRawData, this.needsRawData, this.valuesRawData);
        this.areaResult = this.resObject['resposta'];
        this.displayCharts = false;
        this.snackBar.open('Você pode modificar os parametros na aba "Modificar Parâmetros".', 'Fechar', {duration: 3000, panelClass: ['custom-snackbar']});
      },
      err => {
        this.sended = false;
        this.snackBar.open('Ocorreu um erro. Tente novamente', 'Fechar', {duration: 3000, panelClass: ['custom-snackbar']});
      }
    );
  }

  displayChartsHandler(){
    this.displayCharts = !this.displayCharts;
    if(this.displayCharts){
      setTimeout(()=> {
        const elem = document.getElementById('chartsRef');
        elem.scrollIntoView({ block: 'end',  behavior: 'smooth' });
      },100);
    } else {
      const elem = document.getElementById('areaResultRef');
      elem.scrollIntoView({ block: 'end',  behavior: 'smooth' });
    }
  }

  openInfoDialog(){
    const dialogRef = this.dialog.open(InfoAboutResultDialogComponent, {
      width: '75%',
      data: {
        data: this.resObject.data
      }
    });
  }
}

/**
 * Interface for Input file event
 */
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
