import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private apiUrl = 'https://freetestapi.com/api/v1/students';
  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
