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
  persona:any;
  
  isDetail=false;
  constructor(private service:ProvaServiceService, private route:ActivatedRoute){
  }
  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get("id")){
      this.isDetail = true;
      this.persona = this.service.getPersona(parseInt(this.route.snapshot.paramMap.get('id')!))
      console.log(this.persona);
    } else {
      this.isDetail=false;
      this.persone=this.service.getPersonne();
      console.log("isDetail:" + this.isDetail);
    }


   
  }


}
