import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { slideInAnimation } from 'src/app/animation';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    slideInAnimation
  ],
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {

  userName:string
  passWord:string
  formLogin:FormGroup
  constructor(
    private router:Router,
    private authService:AuthService
  ) { }
  

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }

  onSubmitLogin(){
    console.log(this.formLogin);
    const formLoginValue = this.formLogin.value
    console.log(formLoginValue)
    
    this.authService.postLogin(formLoginValue).subscribe(res=>{
      console.log(res)
    })
    
  }

  navigateSignUp(){
    this.router.navigate(['/register'])
  }

}
