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
  submitted:boolean=false;
  constructor(private uiService:UiServiceService
    ,private toast:ToastrService,private auth:AuthServiceService) {
    this.uiService.onToggleSignUp().subscribe(value=>this.showSignUpForm=value)
   }
  ngOnInit(): void {
    this.signUpForm=new FormGroup ({
      userName: new FormControl (null,[Validators.required]),
      password: new FormControl(null,
        [Validators.required]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      confirmPassword:new FormControl(null,[Validators.required]),
      name:new FormControl(null,Validators.required)
      // Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$')]
      });
  }

  get signUpFormControl(){
    return this.signUpForm.controls;
  }

  loginFormToggleHandler(){
    this.uiService.toggleShowSigninForm()
  }
  signUpFormToggleHandler(){
    this.uiService.toggleShowSignUpForm()
  }
  signUp(){
    console.log("hey",this.signUpForm.value['password']!=this.signUpForm.value['confirmPassword'])
    if(this.signUpForm.value['password']!=this.signUpForm.value['confirmPassword']){
      this.toast.error("Password does not match")
      return
    }
    // console.log(this.signUpForm)
    if(this.signUpForm.status=="INVALID"){
      this.toast.error("Please enter all fields")
      return
    }
    console.log(this.signUpForm.value)
    this.auth.signupUser(this.signUpForm.value).subscribe({
      next:()=>{
        this.toast.success("user added")
      },
      error:(response)=>{
        console.log(response)
        this.toast.error(response.error.message)
      },
      complete:()=>{

      }
    }
    
    )
    
  }
  
 

}
