import { Component, OnInit } from '@angular/core';
import { delay, filter, interval, mergeMap, Observable,switchMap,takeWhile, of, repeat, tap, timer } from 'rxjs';
import { FilmService } from '../services/film.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddFilmComponent } from '../add-film/add-film.component';
import { FilmDto } from '../core/dto/filmDto';
import { slideInAnimation } from '../animation';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class ListFilmComponent implements OnInit {
  dataSource = []
  film_id: number;
  title: string ;
  description: string ;
  releaseYear: number ;
  rating: number;
  languageId:number;
  constructor(
    private filmService:FilmService,
    public dialog: MatDialog
  ) { 
  }

  displayedColumns: string[] = [ 'title', 'lastUpdate', 'description', 'releaseYear','languageId'];

  subscription:Observable<any>
  ngOnInit(): void {
    // this.onLoadFilm()
    // this.subscription = timer(0,5000)
    //   .pipe(
    //     switchMap(() =>
    //       this.filmService.getAllFilm()
    //     ),
    //     repeat(5)
    //   )
    // this.test()

    // this.onLoadFilm()
  }

  

  onLoadFilm(){
       this.filmService.getAllFilm().subscribe(res=>{
      console.log(res);
      this.dataSource = res 
      })
  }

  test(){
   setInterval(()=>this.onLoadFilm(),5000)
  }


  addFilm(e:any){
    const dialogRef = this.dialog.open(AddFilmComponent, {
      width: '500px',
      data: { filmId:0,title:this.title,description:this.description,releaseYear:this.releaseYear,rating:this.rating,languageId:this.languageId},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log("result",result);
      const formFilmDto = new FilmDto()
      formFilmDto.filmId = result.filmId
      formFilmDto.description = result.description
      formFilmDto.title = result.title
      formFilmDto.rating = result.rating
      formFilmDto.releaseYear = Number(result.releaseYear)
      formFilmDto.languageId = Number(result.languageId)
      this.filmService.createFilm(formFilmDto).subscribe(res=>{
        console.log("res",res)
      })
    });
  }

}
