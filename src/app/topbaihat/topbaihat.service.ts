import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopbaihatService {

  private apiUrl = "http://localhost:8080/api/home";

  constructor(private http: HttpClient) { }
 
}
