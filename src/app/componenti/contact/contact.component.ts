import { Component, OnInit } from '@angular/core';
import { ProvaServiceService } from '../../services/prova-service.service';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  response:any;
  persone:any;
  constructor(private service:BackendService){
  }
  ngOnInit(): void {
      console.log("ngOnInit");
      this.service.listPersone()
          .subscribe(resp => {
              this.response = resp;
              this.persone = this.response.dati;
          })
          
  }


   
  }
