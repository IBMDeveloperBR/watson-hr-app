import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-main-personality-page',
  templateUrl: './main-personality-page.component.html',
  styleUrls: ['./main-personality-page.component.scss']
})
export class MainPersonalityPageComponent implements OnInit {
  selectedLanguage:string;

  constructor(
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.selectedLanguage = '';
  }

  fileChange(event: HTMLInputEvent) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      if(this.selectedLanguage == ''){
        this.snackBar.open('Você deve selecionar um idioma primeiro. Faça isso e selecione o arquivo novamente', 'Fechar', {duration: 5000});
      }
      const file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('file', file, file.name);
      formData.append('lang', this.selectedLanguage);

      // this.tccService.uploadPDF(formData).subscribe((res) => {
      //   this.snackBar.open('Documento Enviado com sucesso', 'Fechar', {duration: 3000});
      //   this.getAllTcc();
      // }, (err) => {
      //   this.snackBar.open('Ocorreu um erro. Tente novamente', 'Fechar', {duration: 3000});
      // });
    }
  }

}

/**
 * Interface for Input file event
 */
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
