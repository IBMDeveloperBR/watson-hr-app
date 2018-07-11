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

  getParams(){
    return this.localStorage.getObject('params');
  }
}