import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:string;
  email:string;
  password:string;
  formRegister:any
  regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  constructor(
    
    private router:Router,
    private authService:AuthService
    ) { }

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      email:new FormControl('',Validators.required),
      name:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }

  navigateSignIn(){
    this.router.navigate(['/'])
  }
  
  onSubmitSignUp(){
    console.log(this.formRegister)
    const formRegisterValue = this.formRegister.value
    console.log(formRegisterValue)
    // console.log("formRegister",formRegister)
    this.authService.postRegister(formRegisterValue).subscribe(res=>{
      if(res){
        this.router.navigate(['/'])
      }
    })
  }

}
