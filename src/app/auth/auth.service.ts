import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLogged = true;
  isAdmin = true;

  isAutentificated(){
    return this.isLogged;
  }

  isRoleAdmin(){
    return this.isAdmin;
  }
}
