import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/internal/Observable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getMember(id: string) : Observable<any> {
    return this.http.get(this.baseUrl + 'members/' + id.toString() + '/',
    {headers: this.httpHeaders});
  };
}
