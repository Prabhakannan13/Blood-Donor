import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  viewdonorData=()=>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}