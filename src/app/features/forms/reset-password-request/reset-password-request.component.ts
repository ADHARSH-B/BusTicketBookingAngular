import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './../../../core/service/components/auth/auth-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';

@Component({
  selector: 'app-reset-password-request',
  templateUrl: './reset-password-request.component.html',
  styleUrls: ['./reset-password-request.component.css']
})
export class ResetPasswordRequestComponent implements OnInit {

  showresetPasswordForm: boolean = true;
  resetPasswordForm!: any;
  changePasswordForm:any;
  hasToken:boolean=false;
  submitted: boolean = false
  token:any;
  constructor(private uiService: UiServiceService, private auth: AuthServiceService
    , private toast: ToastrService, private authService: AuthServiceService,
    private router:ActivatedRoute,
    private route:Router) {
    this.uiService.onToggleSignIn().subscribe((value) => this.resetPasswordForm= value)
  }

  ngOnInit(): void {
 
    this.resetPasswordForm = new FormGroup({
      email: new FormControl(null, [Validators.required])
    })
    this.changePasswordForm=new FormGroup({
      password:new FormControl(null,[Validators.required])
    })
    this.uiService.togglePasswordRequestForm().subscribe(data=>this.showresetPasswordForm=data)
    this.router.queryParams.subscribe(data=>{
      if(data['token']){
        this.token=data['token']
        this.hasToken=true
      }
    })
      // Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$')]
  };
    // this.loginForm.reset();
  

  resetPasswordFormToggleHandler() {
    this.uiService.onTogglePassWordRequestForm()
    this.route.navigateByUrl("/home")
  }
 
  get resetPasswordFormControl() {
    return this.resetPasswordForm.controls;
  }
  get changePasswordFormControl(){
    return this.changePasswordForm.controls
  }

  login() {
    this.submitted = true
    // console.log(this.loginForm)
    if(this.hasToken){
      if(this.changePasswordForm.status=="INVALID"){
        this.toast.error("Please enter all the fields")
      }
      let obj={
        password:this.changePasswordForm.value["password"],
        token:this.token
      }
      this.authService.changePassword(obj).subscribe({
        next:(response)=>{
          this.toast.success("Password Updation Done")
          this.route.navigateByUrl("/home")
         },
         error:(response)=>{
           console.log(response)
           this.toast.error(response.error.message)
         },
         complete:()=>{
    
         }
      })

    }
    else{
    if (this.resetPasswordForm.status == 'INVALID') {

        this.toast.error("Please enter all the fields")
      return;
    }
    console.log(this.resetPasswordForm.value)
   this.auth.resetPasswordRequest(this.resetPasswordForm.value).subscribe({
     next:(response)=>{
    
      this.toast.success("Check Your Mail")
      this.route.navigateByUrl("/home")
      
     },
     error:(response)=>{
       console.log(response)
       this.toast.error(response.error.message)
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
}