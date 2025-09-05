import { Component, OnInit } from '@angular/core';
import { ProvaServiceService } from '../services/prova-service.service';

@Component({
  selector: 'app-prova-service',
  standalone: false,
  templateUrl: './prova-service.component.html',
  styleUrl: './prova-service.component.css'
})
export class ProvaServiceComponent implements OnInit{
  data:any;

  constructor(private service:ProvaServiceService){}
 
  ngOnInit(): void {
    this.data = this.service.getPersonne();  
  }

}
