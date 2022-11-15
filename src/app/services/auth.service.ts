import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { register,login } from "../backend-api";

@Injectable({
    providedIn:"root",
})

export class AuthService{
    headers:HttpHeaders | undefined
    constructor(
        private http:HttpClient
    ){}


    postRegister(formRegister:any){
        return this.http.post<any>(register,formRegister)
    }

    postLogin(formLogin:any){
        return this.http.post<any>(login,formLogin)
    }
}