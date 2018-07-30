import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PersonalityService } from '../services/personality.service';
import {saveAs} from 'file-saver/FileSaver';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.scss']
})
export class CvCardComponent implements OnInit {
  @Input('name') name:string;
  file:File;
  blob:Blob;
  @Output() pdfClick: EventEmitter<File> = new EventEmitter<File>(); //creating an output event
  constructor(
    private personalityService: PersonalityService
  ) { }

  ngOnInit() {
    this.personalityService.getExampleCv(this.name).subscribe((res: Blob) => {
      this.blob = new Blob([res], { type: 'application/pdf' });
      const arrayOfBlob = new Array<Blob>();
      arrayOfBlob.push(this.blob);
      this.file = new File(arrayOfBlob, this.name, { type: 'application/pdf' });
    });
  }

  sendEvent(event){
    this.pdfClick.emit(this.file);
  }

  download(){
    saveAs(this.blob, this.name);
  }
}
