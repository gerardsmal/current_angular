import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProvaServiceService } from '../../services/prova-service.service';

@Component({
  selector: 'app-contatto',
  standalone: false,
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent implements OnInit {

  id: number;
  personalContatto: any;

  constructor(private route: ActivatedRoute, private service: ProvaServiceService) {
  }

  ngOnInit(): void {
    // controllo della vrariazione dei parametri di paramMap
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = + params.get("id");   // equivalent a parseint
      this.personalContatto = this.service.getPersona(this.id);
    }

    )

  }

}
