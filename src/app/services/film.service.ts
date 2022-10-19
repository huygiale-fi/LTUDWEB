import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createFilmApi, getAllFilmApi } from "../backend-api";

@Injectable({
    providedIn: "root",
  })

export class FilmService{
    headers:HttpHeaders | undefined
    constructor(
        private http:HttpClient
    ){}


    getAllFilm(){
        return this.http.get<any>(getAllFilmApi)
    }

    createFilm(formFilmDto:any){
        return this.http.post<any>(createFilmApi,formFilmDto)
    }
}