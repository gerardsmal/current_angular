import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'project-angular';
  
  oggi:Date = new Date();
  numero:number = 12.5;


  persone = [{}];

  persone0 =[
    { nome:'Luca', cognome:'Purlto', isOnLine:true , colore:'green'},
    { nome:'Paolo', cognome:'Strumen', isOnLine:false, colore:'red'},
    { nome:'Anna', cognome:'Beraela', isOnLine:true , colore:'grey'},
    { nome:'Marcello', cognome:'Zuca', isOnLine:false, colore:'blue'},
    { nome:'Francesco', cognome:'Andreoti', isOnLine:true, colore:'pink'}
  ]

   persone1 =[
    { nome:'Donald', cognome:'Trump', isOnLine:true , colore:'green'},
    { nome:'Elon', cognome:'Musk', isOnLine:false, colore:'red'},
    { nome:'Tom', cognome:'Cook', isOnLine:true , colore:'grey'},
    { nome:'Filippo', cognome:'Champagne', isOnLine:false, colore:'blue'},
    { nome:'Roberto', cognome:'Dacrema', isOnLine:true, colore:'pink'},
    { nome:'Simona', cognome:'Ventura', isOnLine:true, colore:'green'}
  ]

  ngOnInit(): void {
    this.persone = this.persone0;
  }
  onClick(){
    console.log("onclick...");
    this.persone = this.persone1;
  }

  restore(){
    console.log("restore...");
    this.persone = this.persone0;
  }
  onRecieveData(value:string){
    console.log("valore ricevuto dal figlio:" + value);
  }
  colore= '';
  
  cambioColoreEvid(coloreEv:string){
    this.colore = coloreEv;
  }
}
