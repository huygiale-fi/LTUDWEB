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
  siteKey:string = '6Ld9RT4jAAAAAOPCLy6uZ3zBAs7TAPRUDkOW74jK'

  constructor(
    private router:Router,
    private authService:AuthService
  ) { }
  
  resolved(e:any){
    console.log(e)
  }

  errored(e:any){
    console.log(e)
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      reCaptcha:new FormControl(null,Validators.required)
    })
  }

  onSubmitLogin(){
    console.log(this.formLogin);
    if(this.formLogin.status != 'VALID') return;
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
