import { Component, OnInit } from '@angular/core';
import { PersonalityService } from '../services/personality.service';

@Component({
  selector: 'app-change-params-personality-page',
  templateUrl: './change-params-personality-page.component.html',
  styleUrls: ['./change-params-personality-page.component.scss']
})
export class ChangeParamsPersonalityPageComponent implements OnInit {
  private params: Array<any>;
  private editParams:Array<any>;

  private step:string = 'values';
  constructor(
    private personalityService: PersonalityService
  ) { }

  ngOnInit() {
    this.params = this.personalityService.getBaseParams();
    this.editParams = null;
  }

  setStep(index) {
    this.step = index;
  }

  setToEdit(index) {
    this.editParams = this.params[index];
  }

}
