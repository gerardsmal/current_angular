import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtenteServiceService } from '../../services/utente-service.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  msg="";

  constructor(private utente: UtenteServiceService,
    private router: Router,
    private auth: AuthService
  ) {}

  onSubmit(signin: NgForm) {
    this.auth.resetAll();

    this.utente.signin({
      user: signin.form.value.userName,
      pwd: signin.form.value.password
    }).subscribe((resp: any) => {
      console.log(resp);
      if (resp.logged) {
        console.log('utente logged.. role:' + resp.role);
        this.auth.setAuthentificated();
        this.msg="";
        if (resp.role == 'ADMIN') {
          this.auth.setAdmin();
        }
        this.router.navigate(['home']);
      } else {
        this.msg='user/password invalido';
      }
    })

  }
}
