import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';


@Component({
  selector: 'app-prova',
  standalone: false,
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit, AfterViewInit{
  @ViewChild('inputSaluti') valoreInput! : ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    // console.log(this.valoreInput);
  }
  ngAfterViewInit(): void {
    console.log("after viewInit:" + this.valoreInput.nativeElement.value);
  }
  onClick(){
    console.log(this.valoreInput.nativeElement.value);
  }
  /*
  @Input() data:any;   // data parametro che arriva da fuori
  @Output() mandaDatiEvent = new EventEmitter<string>();

  dataToSend="data dal figlio";

  ngOnInit(): void {
   console.log(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  mandaDati(){
    this.mandaDatiEvent.emit(this.dataToSend);
  }

  idDisabled = false;

  cerchioOn: string = 'green';
  cerchioOff: string = 'red';

  constructor(){
  }
  title = "pagina di prova";
  daVedere = false;

  persone =[
    { nome:'Luca', cognome:'Purlto', isOnLine:true , colore:'green'},
    { nome:'Paolo', cognome:'Strumen', isOnLine:false, colore:'red'},
    { nome:'Anna', cognome:'Beraela', isOnLine:true , colore:'grey'},
    { nome:'Marcello', cognome:'Zuca', isOnLine:false, colore:'blue'},
    { nome:'Francesco', cognome:'Andreoti', isOnLine:true, colore:'pink'}
  ]

  numero:number=4;
  stringa:string="pluto";
  
 
  wait(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));  //  promise permette di aspettare il tempo dells fine operazione
  }
  
  async ngOnInit(): Promise<void> {
    console.log("ngOnInit:" + this.idDisabled);

    // aspetto 5 secondi
    await this.wait(5000);  // await fermo l'esecuzione per il tempo del timeout

    this.idDisabled = !this.idDisabled;
    console.log("after wait :" + this.idDisabled);    

    await this.wait(5000); 

    this.idDisabled = !this.idDisabled;
    console.log("after set :" + this.idDisabled);    
  }

  hoCliccato(e :any){
    this.title = "ho cliccato sul btuttone";
  }
reset(e :any){
    this.title = "pagina di prova";
  }


  onInput(e :Event): void {
    console.log((<HTMLInputElement>e.target).value);
  }

  cani = [
    {nome: 'Roger',
      razza:'golden',
      description:'ababab abbabab bababa'  
    }
  ]

*/
}
