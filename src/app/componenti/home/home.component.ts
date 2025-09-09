import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  homeForm : FormGroup;  
  
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
    console.log(this.homeForm);
  }
}
