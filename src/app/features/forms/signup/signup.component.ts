import { UiServiceService } from './../../../core/service/components/ui/ui-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  showSignUpForm:boolean=false;
  constructor(private uiService:UiServiceService) {
    this.uiService.onToggleSignUp().subscribe(value=>this.showSignUpForm=value)
   }
  ngOnInit(): void {
  }
  loginFormToggleHandler(){
    this.uiService.toggleShowSigninForm()
  }
  signUpFormToggleHandler(){
    console.log('called')
    this.uiService.toggleShowSignUpForm();
  }
  
 

}
