import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { PersonalityService } from '../services/personality.service';

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

  @ViewChild('chartsRef') public chartsRef: ElementRef;
  @ViewChild('areaResultRef') public areaResultRef: ElementRef


  constructor(
    private snackBar: MatSnackBar,
    private personalityService: PersonalityService
  ) { }

  ngOnInit() {
    this.selectedLanguage = '';
    this.fileName = '';
    this.areaResult = '';
    this.sended = true;
    this.result = [{result: 'Dump data'}];
    this.file = null;
    this.displayCharts = false;
    this.initRawDataArrays();
  }

  initRawDataArrays(){
    this.personalityRawData = [];
    this.needsRawData = [];
    this.valuesRawData = [];
  }

  fileChange(event: HTMLInputEvent) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
      this.fileName = this.file.name;
    }
  }

  extractData(){
    this.result.personality.forEach(element => {
      this.personalityRawData.push({
        name: element.name,
        value: (parseFloat(element.percentile) * 100).toFixed(2)
      })
    });
    this.result.needs.forEach(element => {
      this.needsRawData.push({
        name: element.name,
        value: (parseFloat(element.percentile) * 100).toFixed(2)
      })
    });
    this.result.values.forEach(element => {
      this.valuesRawData.push({
        name: element.name,
        value: (parseFloat(element.percentile) * 100).toFixed(2)
      })
    });
  }
  
  sendFile(){
    if(this.file == null){
      this.snackBar.open('Você deve selecionar um arquivo primeiro.', 'Fechar', {duration: 5000});
      return;
    }
    if(this.selectedLanguage == ''){
      this.snackBar.open('Você deve selecionar um idioma primeiro.', 'Fechar', {duration: 5000});
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
        this.areaResult = 'TI';
        this.displayCharts = false;
        this.snackBar.open('Você pode modificar os parametros na aba "Modificar Parâmetros".', 'Fechar', {duration: 3000});
      },
      err => {
        this.sended = false;
        this.snackBar.open('Ocorreu um erro. Tente novamente', 'Fechar', {duration: 3000});
      }
    );
  }

  displayChartsHandler(){
    this.displayCharts = !this.displayCharts;
    if(this.displayCharts) {
        console.log(this.chartsRef.nativeElement);
        this.chartsRef.nativeElement.scrollIntoView();
    } else {
      this.chartsRef.nativeElement.scrollIntoView();
    }
  }

}

/**
 * Interface for Input file event
 */
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
