import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { PersonalityService } from '../services/personality.service';

@Component({
  selector: 'app-main-personality-page',
  templateUrl: './main-personality-page.component.html',
  styleUrls: ['./main-personality-page.component.scss']
})
export class MainPersonalityPageComponent implements OnInit {
  selectedLanguage:string;
  result:Object;
  fileName:string;
  sended:boolean;
  file:File;

  constructor(
    private snackBar: MatSnackBar,
    private personalityService: PersonalityService
  ) { }

  ngOnInit() {
    this.selectedLanguage = '';
    this.fileName = '';
    this.sended = false;
    this.file = null;
  }

  fileChange(event: HTMLInputEvent) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
      this.fileName = this.file.name;
    }
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
    this.personalityService.getPersonality(formData).subscribe(
      data => { 
        this.sended = false;
        this.result = data.resultPersonality;
        this.snackBar.open('Você pode modificar os parametros na aba "Modificar Parâmetros".', 'Fechar', {duration: 3000});
      },
      err => {
        this.sended = false;
        this.snackBar.open('Ocorreu um erro. Tente novamente', 'Fechar', {duration: 3000});
      }
    );
  }

}

/**
 * Interface for Input file event
 */
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
