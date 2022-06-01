import { AuthServiceService } from './../../../core/service/components/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLoginForm: boolean = false;
  loginForm!: any;
  submitted: boolean = false
  user!:any;
  constructor(private uiService: UiServiceService, private auth: AuthServiceService
    , private toast: ToastrService, private authService: AuthServiceService) {
    this.uiService.onToggleSignIn().subscribe((value) => this.showLoginForm = value)
  }

  ngOnInit(): void {
    console.log('hi')
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required
        // Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")
      ])
      // Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$')]
    });
    this.loginForm.reset();
  }

  loginFormToggleHandler() {
    this.uiService.toggleShowSigninForm()
  }
  signUpFormToggleHandler() {
    this.uiService.toggleShowSignUpForm();
  }
  get LoginFormControl() {
    return this.loginForm.controls;
  }

  
  login() {
    this.submitted = true
    console.log(this.loginForm)
    
    if (this.loginForm.status == 'INVALID') {

        this.toast.error("Please enter all the fields")
      return;
    }
    console.log(this.loginForm.value)
   this.auth.loginUser(this.loginForm.value).subscribe({
     next:(response)=>{
      localStorage.setItem("authtoken", response.authToken)
      localStorage.setItem("refreshToken", response.refreshToken)
      this.toast.success("Login Success")
      this.uiService.onToggleIsAdminLoggenIn()
      this.uiService.ontoggleIsLoggenIn();
     },
     error:(response)=>{
       console.log(response)
       this.toast.error(response.error)
     },
     complete:()=>{

     }
   })

    // this.auth.loginUser(this.loginForm.value).subscribe((response: any) => {
      
      // this.uiService.onToggleSignIn();
      
      // if(response["role"].forEach((r: { authority: string; })=>{
      //   if(r.authority=="ADMIN"){
      //     // console.log(this.authService)
      //      this.authService.isAdminLoggenIn=true
      //   }
      // }))
      // console.log(response)
      // this.toastr.success('SignIn Success')
    // }, (error: any) => {
      // this.toastr.error(error.error)
    // });
  }

}
function next(next: any, arg1: () => void) {
  throw new Error('Function not implemented.');
}

