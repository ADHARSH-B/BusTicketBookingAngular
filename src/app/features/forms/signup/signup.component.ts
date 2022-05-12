import { UiServiceService } from './../../../core/service/components/ui/ui-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from './../../../core/service/components/auth/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  showSignUpForm:boolean=false;
  signUpForm:any;
  constructor(private uiService:UiServiceService
    ,private toast:ToastrService,private auth:AuthServiceService) {
    this.uiService.onToggleSignUp().subscribe(value=>this.showSignUpForm=value)
   }
  ngOnInit(): void {
    this.signUpForm=new FormGroup ({
      userName: new FormControl (null),
      password: new FormControl(null),
      email:new FormControl(null),
      confirmPassword:new FormControl(null),
      name:new FormControl(null)
      // Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$')]
      });
  }
  loginFormToggleHandler(){
    this.uiService.toggleShowSigninForm()
  }
  signUpFormToggleHandler(){
    console.log(this.signUpForm.value);
    this.auth.signupUser(this.signUpForm.value).subscribe(()=>{
      this.toast.success("User Signup Sucess")
    })
    this.uiService.toggleShowSignUpForm();
  }
  
 

}
