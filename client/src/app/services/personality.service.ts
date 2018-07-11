import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { default as baseParams } from './baseParams'

@Injectable({
  providedIn: 'root'
})
export class PersonalityService {
  private baseParams = baseParams;
  constructor(
    private http:HttpClient
  ) { }

  getPersonality(formData: FormData): any{
    return this.http.post('/api/personality/upload', formData);
  }

  getBaseParams() {
    return this.baseParams.default;
  }
}