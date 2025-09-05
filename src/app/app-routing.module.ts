import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenti/home/home.component';
import { AboutComponent } from './componenti/about/about.component';
import { ContactComponent } from './componenti/contact/contact.component';
import { ContattoComponent } from './componenti/contatto/contatto.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';
import { authGuard } from './auth/auth.guard';
import { authAdminGuard } from './auth/auth-admin.guard';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component:HomeComponent},
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
