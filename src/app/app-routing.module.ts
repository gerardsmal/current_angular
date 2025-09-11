import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { authGuard } from './auth/auth.guard';
import { authAdminGuard } from './auth/auth-admin.guard';
import { SigninComponent } from './componenti/signin/signin.component';
import { RegistrazioneComponent } from './componenti/registrazione/registrazione.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'login'},
  {path:'login', component:SigninComponent},
  {path:'register', component:RegistrazioneComponent},
  {path:'home', component:HomeComponent, canActivate:[authGuard]},
  {path:'about', component:AboutComponent , canActivate:[authGuard]},
  {path:'contact', component: ContactComponent , canActivate:[authGuard], 
                  canActivateChild: [authAdminGuard] ,children:
     [
      {path:':id', component: ContattoComponent}
     ]
  },
  {path:'404', component:NotfoundComponent},
  {path:'**', redirectTo:'404'}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
