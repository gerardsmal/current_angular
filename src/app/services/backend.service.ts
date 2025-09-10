import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  url = 'http://localhost:9090/rest/persone/';
  constructor(private http : HttpClient) { }

  listPersone(){
    return this.http.get(this.url + 'list');
  }

  getPersona(id: number){
    let params = new HttpParams().set('id', id);
    return this.http.get(this.url + "getById", { params});
  }

  insertPersona(body:{}){
    return this.http.post(this.url + 'create', body);
  }
  removePersona(body:{}){
    return this.http.post(this.url + 'delete', body);
  }

  updatePersona(body:{}){
    console.log(body);
    return this.http.put(this.url + 'update', body);
  }

}
