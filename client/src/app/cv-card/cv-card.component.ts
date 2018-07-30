import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cv-card',
  templateUrl: './cv-card.component.html',
  styleUrls: ['./cv-card.component.scss']
})
export class CvCardComponent implements OnInit {
  @Input('name') name:string;
  constructor() { }

  ngOnInit() {
  }

}
