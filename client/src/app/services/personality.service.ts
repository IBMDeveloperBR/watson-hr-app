import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonalityService {

  constructor(
    private http:HttpClient
  ) { }

  getPersonality(formData: FormData): any{
    return this.http.post('/api/personality/upload', formData);
  }
}
