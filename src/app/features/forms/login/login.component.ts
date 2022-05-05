import { AuthServiceService } from './../../../core/service/components/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLoginForm:boolean=false;
  loginForm!:any;
  constructor(private uiService:UiServiceService,private auth:AuthServiceService) {
    this.uiService. onToggleSignIn().subscribe((value)=>this.showLoginForm=value)
   }

  ngOnInit(): void {
    console.log('hi')
    this.loginForm=new FormGroup ({
      userName: new FormControl (null,[Validators.required,
      Validators.minLength(4),Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(9)
      ,Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$')])
      });
  }

  loginFormToggleHandler(){
    console.log('hi')
    this.uiService.toggleShowSigninForm()
  }
  signUpFormToggleHandler(){
    this.uiService.toggleShowSignUpForm();
  }


  login(){
    console.log(this.loginForm)
    if(this.loginForm.status=='INVALID'){
      console.log(this.loginForm)
      // this.toastr.error("Input Fields Cannot Be Empty")
      return;
    }
  
    this.auth.loginUser(this.loginForm.value).subscribe((data:any)=>{
      console.log(data)
      // this.toastr.success('SignIn Success')
    },(error:any)=>{
      // this.toastr.error(error.error)
    });
  }

}
