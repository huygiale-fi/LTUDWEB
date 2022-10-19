import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFilmComponent } from './add-film/add-film.component';
import { ListFilmComponent } from './list-film/list-film.component';

const routes: Routes = [
  {path:'list-film',component:ListFilmComponent},
  {path:'add-film',component:AddFilmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
