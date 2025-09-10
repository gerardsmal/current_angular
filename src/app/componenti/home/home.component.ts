import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  homeForm : FormGroup;  
  msg:string = '';
  constructor(private service: BackendService){}

  ngOnInit(): void {
    this.homeForm = new FormGroup({
      nome: new FormControl('Gerard', Validators.required),
      cognome: new FormControl(null,Validators.required),
      email : new FormControl(null,[Validators.required, Validators.email]),
      colore: new FormControl()
    }

    )
  }

  onSubmit(){
    this.service.insertPersona({
      nome: this.homeForm.value.nome,
      cognome: this.homeForm.value.cognome,
      email: this.homeForm.value.email,
      colore: this.homeForm.value.colore,
      isOnline: true
    })
    .subscribe((resp:any) => {
      if (resp.rc){
        this.homeForm.reset();
      } else {
        this.msg = resp.msg;
      }
    })
    
  }
}
