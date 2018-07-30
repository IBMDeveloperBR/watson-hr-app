import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { default as baseParams } from './baseParams'
import { CoolLocalStorage } from '@angular-cool/storage';

@Injectable({
  providedIn: 'root'
})
export class PersonalityService {
  private baseParams = baseParams;
  constructor(
    private http:HttpClient,
    private localStorage: CoolLocalStorage
  ) { }

  getPersonality(formData: FormData): any{
    return this.http.post('/api/personality/upload', formData);
  }

  importJSON(formData: FormData): any {
    return this.http.post('/api/personality/import', formData);
  }

  getExampleCv(fileName:string){
    return this.http.get('/api/personality/example-cv/'+ fileName, {responseType: "blob", headers: {'Accept': 'application/pdf'}});
  }

  getBaseParams() {
    const storageParams = this.getParams();
    if(storageParams) {
      return storageParams;
    } else {
      this.setParams(this.baseParams.default);
      return this.getParams();
    }
  }

  setParams(newParams){
    this.localStorage.setObject('params', newParams);
  }

  getParams(): Array<any>{
    return this.localStorage.getObject('params');
  }

  runAnalysis(personality, needs, values){
    let params = this.getParams();
    params.map((el, index) => {
      el.points = 0;
      let points = el.points;
      el.personality.forEach(param => {
        const persItem = personality.find((obj) => {
          return obj.name === param.name; 
        });
        if(persItem.value >= param.min) points++;
      });
      el.needs.forEach(param => {
        const needsItem = needs.find((obj) => {
          return obj.name === param.name; 
        });
        if(needsItem.value >= param.min) points++;
      });
      el.values.forEach(param => {
        const valuesItem = values.find((obj) => {
          return obj.name === param.name; 
        });
        if(valuesItem.value >= param.min) points++;
      });
      el.points = points;
    });
    const maxPoints = params.reduce((a, b) => {
      return Math.max(parseInt(a.points || a), parseInt(b.points || b));
    });

    const resArray = [];
    params.forEach((el) => {
      if(el.points == maxPoints) resArray.push(el.area);
    });
    return resArray.join(', ')
  }
}