import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListFilmComponent } from './list-film/list-film.component';


const routes: Routes = [
  {path:'list-film',component:ListFilmComponent,data:{animation:'ListFilmPage'}},
  {path:'add-film',component:AddFilmComponent,data:{animation:'AddFilmPage'}},
  {path:'',component:LoginComponent,data:{animation:'LoginPage'}},
  {path:'register',component:RegisterComponent,data:{animation:'RegisterPage'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
