import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { MainPersonalityPageComponent } from '../main-personality-page/main-personality-page.component';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {
  file:File;
  fileName: string;

  examples = [
    'Joao_MKT.pdf', 'Maria_TI.pdf', 'Antonio_Vendas.pdf'
  ];

  constructor(
    public dialogRef: MatDialogRef<MainPersonalityPageComponent>,
    @Inject(MAT_DIALOG_DATA) public dataReceive: any,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  fileChange(event: HTMLInputEvent) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.file = fileList[0];
      if(this.file.type != "application/pdf"){
        this.file = null;
        this.snackBar.open('Somente PDF\'s são aceitos.', 'Fechar', {duration: 5000, panelClass: ['custom-snackbar']});
      } else {
        this.fileName = this.file.name;
      }
    }
  }

  send(status) {
    if(status == false)
      this.dialogRef.close(status)
    else {
      this.dialogRef.close({file: this.file, lang: 'pt'});
    }
  }

  getFileFromExamples(event){
    this.file = event;
    this.fileName = this.file.name;
  }

}

/**
 * Interface for Input file event
 */
interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}