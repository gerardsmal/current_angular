import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvaServiceService {

  constructor() { }

  private persone =[
    { nome:'Donald', cognome:'Trump', isOnLine:true , colore:'green'},
    { nome:'Elon', cognome:'Musk', isOnLine:false, colore:'red'},
    { nome:'Tim', cognome:'Cook', isOnLine:true , colore:'grey'},
    { nome:'Filippo', cognome:'Champagne', isOnLine:false, colore:'blue'},
    { nome:'Roberto', cognome:'Dacrema', isOnLine:true, colore:'pink'},
    { nome:'Simona', cognome:'Ventura', isOnLine:true, colore:'green'}
  ]

  getPersonne(){
    return this.persone;
  }

  getPersona(index:number){
      return this.persone[index];
  }
}
