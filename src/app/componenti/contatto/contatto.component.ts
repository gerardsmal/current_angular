import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BackendService } from '../../services/backend.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contatto',
  standalone: false,
  templateUrl: './contatto.component.html',
  styleUrl: './contatto.component.css'
})
export class ContattoComponent implements OnInit {

  id: number;
  personalContatto: any = {};
  msg = "";

  updateForm: FormGroup = new FormGroup({
    nome: new FormControl(),
    cognome: new FormControl(),
    email: new FormControl(),
    colore: new FormControl(),
    isOnLine: new FormControl(),


  })
  constructor(private route: ActivatedRoute,
    private service: BackendService,
    private routing: Router) {
  }

  ngOnInit(): void {
    // controllo della vrariazione dei parametri di paramMap
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = + params.get("id");   // equivalent a parseint
      this.service.getPersona(this.id)
        .subscribe((resp: any) => {
          this.personalContatto = resp.dati;
          console.log(this.personalContatto)
          this.updateForm = new FormGroup({
            nome: new FormControl(this.personalContatto.nome, Validators.required),
            cognome: new FormControl(this.personalContatto.cognome, Validators.required),
            email: new FormControl(this.personalContatto.email, Validators.required),
            colore: new FormControl(this.personalContatto.colore),
            isOnLine: new FormControl(this.personalContatto.isOnline)

          })


        })
    }

    )

  }

  onSubmit() {
    const updateBody:any = {id: this.id}

    if (this.updateForm.controls['cognome'].touched)
      updateBody.cognome = this.updateForm.value.cognome

    if (this.updateForm.controls['nome'].touched)
      updateBody.nome = this.updateForm.value.nome

    if (this.updateForm.controls['email'].touched)
      updateBody.email = this.updateForm.value.email

    if (this.updateForm.controls['colore'].touched)
      updateBody.colore = this.updateForm.value.colore

    if (this.updateForm.controls['isOnLine'].touched)
      updateBody.isOnline = this.updateForm.value.isOnLine
    
    console.log(updateBody);

    this.service.updatePersona(updateBody)
      .subscribe((resp:any) => {
        
        if (resp.rc) {
       
          this.routing.navigate(["/contact"])
            .then(() => {
              window.location.reload();
            })
        } else {
          this.msg = resp.msg;
        }
       
      })
  
  }

  onDelete() {
    console.log("onDelete");
    this.service.removePersona({
      id: this.id
    })
      .subscribe((resp: any) => {
        if (resp.rc) {
          this.routing.navigate(["/contact"])
            .then(() => {
              window.location.reload();
            })
        } else {
          this.msg = resp.msg;
        }
      })
  }
  onAnnul(){
    this.routing.navigate(["/contact"])
      .then(() => {
        window.location.reload();
      })

  }
}
