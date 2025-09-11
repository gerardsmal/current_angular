import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtenteServiceService {

  url:string = "http://localhost:9090/rest/utente/";

  constructor(private http:HttpClient) { 
  }

  signin(body:{}){
    return this.http.post(this.url + "signin", body);
  }

  create(body:{}){
    console.log(body);
    return this.http.post(this.url + "create", body);
  }
}
