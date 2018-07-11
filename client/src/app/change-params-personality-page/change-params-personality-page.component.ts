import { Component, OnInit } from '@angular/core';
import { PersonalityService } from '../services/personality.service';

@Component({
  selector: 'app-change-params-personality-page',
  templateUrl: './change-params-personality-page.component.html',
  styleUrls: ['./change-params-personality-page.component.scss']
})
export class ChangeParamsPersonalityPageComponent implements OnInit {
  private params;
  private editParams:Array<any>;

  private step:string = 'values';
  constructor(
    private personalityService: PersonalityService
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
}
