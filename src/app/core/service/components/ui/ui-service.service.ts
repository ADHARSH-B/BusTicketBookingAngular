import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  private showSignInForm:boolean=false;
  private showSignUpForm:boolean=false;
  private signInsubject=new Subject<any>()
  private signUpsubject=new Subject<any>()
  private showBookingSummary:boolean=false;
  private showBookingSummarysubject=new Subject<any>()
  private checkOut:boolean=false;
  private checkOutsubject=new Subject<any>()
  private userDetailsEditForm:boolean=false;
  private userDetailsEditFormSubject=new Subject<any>();
  private busDetailsEditForm:boolean=false;
  private busDetailsEditFormSubject=new Subject<any>();
  private busDetailsAddForm:boolean=false;
  private busDetailsAddSubject=new Subject<any>();

  constructor() { }
  togglebusDetailsAddForm(){
    this.busDetailsAddForm=!this.busDetailsAddForm
    this.busDetailsAddSubject.next(this.busDetailsAddForm);
  }
  ontogglebusDetailsAddForm(){
    return this.busDetailsAddSubject.asObservable();
  }

  togglebusDetailsEditForm(){
    this.busDetailsEditForm=!this.busDetailsEditForm;
    this.busDetailsEditFormSubject.next(this.busDetailsEditForm);
  }

  ontogglebusDetailsEditForm(){
    // console.log('called')
    return this.busDetailsEditFormSubject.asObservable();
  }

  toggleuserDetailsEditForm(){
    this. userDetailsEditForm=!this. userDetailsEditForm;
    this. userDetailsEditFormSubject.next(this.userDetailsEditForm);
  }
  ontoggleuserDetailsEditForm(){
    console.log(this.userDetailsEditForm)
    return this.userDetailsEditFormSubject.asObservable();
  }

  toggleShowSigninForm(){
    this.showSignInForm=!this.showSignInForm;
    this.signInsubject.next(this.showSignInForm)
  }
  onToggleSignIn(){
    return this.signInsubject.asObservable()
  }
  toggleShowSignUpForm(){
    this.showSignUpForm=!this.showSignUpForm;
    this.signUpsubject.next(this.showSignUpForm)
  }
  onToggleSignUp(){
    return this.signUpsubject.asObservable()
  }

  onToggleBookingSummary(){
    return this.showBookingSummarysubject.asObservable()
  }

  toggleshowBookingSummary(){
    this.showBookingSummary=!this.showBookingSummary;
    this.showBookingSummarysubject.next(this.showBookingSummary);
  }
  onToggleCheckout(){
    return this.checkOutsubject.asObservable();
  }

  toggelCheckOut(){
    this.checkOut=!this.checkOut;
    this.checkOutsubject.next(this.checkOut);
  }
}
