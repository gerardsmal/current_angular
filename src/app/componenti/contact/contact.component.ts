import { Component, OnInit } from '@angular/core';
import { ProvaServiceService } from '../../services/prova-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  persone:any;
  constructor(private service:ProvaServiceService){
  }
  ngOnInit(): void {
      this.persone=this.service.getPersonne();
    }


   
  }
