import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class UiServiceService {

  private showSignInForm: boolean = false;
  private showSignUpForm: boolean = false;
  private showPassengerForm: boolean = false;
  private showPassengerFormSubject = new Subject<any>();
  private signInsubject = new Subject<any>()
  private signUpsubject = new Subject<any>()
  private showBookingSummary: boolean = false;
  private showBookingSummarysubject = new Subject<any>()
  private checkOut: boolean = false;
  private checkOutsubject = new Subject<any>()
  private userDetailsEditForm: boolean = false;
  private userDetailsEditFormSubject = new Subject<any>();
  private busDetailsEditForm: boolean = false;
  private busDetailsEditFormSubject = new Subject<any>();
  private busDetailsAddForm: boolean = false;
  private busDetailsAddSubject = new Subject<any>();
  private _refreshRequired = new Subject<void>();
  private _userbusDetailsRefresh = new Subject<void>();
  private isAdminLoggenIn = false;
  private isAdminLoggenInSubject = new Subject<boolean>();
  private addStationForm = false;
  private addStationSubject = new Subject<boolean>();
  private isLoggenIn = false;
  private isLoggenInSubject = new Subject<boolean>();
  private passwordRequestForm: boolean = false;
  private passwordRequestFormSubject = new Subject<any>();
  private showSidebar=false;
  private showSidebarSubject=new Subject<any>();
  constructor() { }

  toggleSideBar(){
    return this.showSidebarSubject.asObservable()
  }
  onToggleSidebar(){
    this.showSidebar=!this.showSidebar
    this.showSidebarSubject.next(this.showSidebar)
  }
  togglePasswordRequestForm(){
    return this.passwordRequestFormSubject.asObservable()
  }
  onTogglePassWordRequestForm(){
    this.passwordRequestForm=!this.passwordRequestForm;
    this.passwordRequestFormSubject.next(this.passwordRequestForm)
  }

  toggleAddStation() {
    return this.addStationSubject.asObservable();
  }
  ontoggleAddStation() {
    this.addStationForm = !this.addStationForm;
    this.addStationSubject.next(this.addStationForm);
  }
  toggleIsAdminLoggenIn() {
    return this.isAdminLoggenInSubject.asObservable()
  }
  toggleShowPassengerForm() {
    return this.showPassengerFormSubject.asObservable();
  }
  ontoggleShowPassengerForm() {
    this.showPassengerForm = !this.showPassengerForm
    this.showPassengerFormSubject.next(this.showPassengerForm)
  }
  toggleIsLoggenIn() {
    return this.isLoggenInSubject.asObservable()
  }
  ontoggleIsLoggenIn() {
    this.isLoggenIn = !this.isLoggenIn
    return this.isLoggenInSubject.next(this.isLoggenIn)
  }
  onToggleIsAdminLoggenIn() {
    const token = localStorage.getItem("authtoken");
    console.log(jwtDecode(token!))
    1652381375
    // this.isAdminLoggenInSubject.next(this.isAdminLoggenIn)
    if (token != undefined && token != null) {
      const decryptedToken: any = jwtDecode(token!)
      // console.log(decryptedToken)
      decryptedToken["role"].forEach((r: { authority: string; }) => {
        if (r.authority == "ADMIN") {
          this.isAdminLoggenInSubject.next(true)
        }
      })
    }

  }
  refreshBusDetails() {
    return this._userbusDetailsRefresh
  }
  refreshRequired() {
    return this._refreshRequired;
  }

  togglebusDetailsAddForm() {
    this.busDetailsAddForm = !this.busDetailsAddForm
    this.busDetailsAddSubject.next(this.busDetailsAddForm);
  }
  ontogglebusDetailsAddForm() {
    return this.busDetailsAddSubject.asObservable();
  }

  togglebusDetailsEditForm() {
    this.busDetailsEditForm = !this.busDetailsEditForm;
    this.busDetailsEditFormSubject.next(this.busDetailsEditForm);
  }

  ontogglebusDetailsEditForm() {
    // console.log('called')
    return this.busDetailsEditFormSubject.asObservable();
  }

  toggleuserDetailsEditForm() {
    this.userDetailsEditForm = !this.userDetailsEditForm;
    this.userDetailsEditFormSubject.next(this.userDetailsEditForm);
  }
  ontoggleuserDetailsEditForm() {
    console.log(this.userDetailsEditForm)
    return this.userDetailsEditFormSubject.asObservable();
  }

  toggleShowSigninForm() {
    this.showSignInForm = !this.showSignInForm;
    this.signInsubject.next(this.showSignInForm)
  }
  onToggleSignIn() {
    return this.signInsubject.asObservable()
  }
  toggleShowSignUpForm() {
    this.showSignUpForm = !this.showSignUpForm;
    this.signUpsubject.next(this.showSignUpForm)
  }
  onToggleSignUp() {
    return this.signUpsubject.asObservable()
  }

  onToggleBookingSummary() {
    return this.showBookingSummarysubject.asObservable()
  }

  toggleshowBookingSummary() {
    this.showBookingSummary = !this.showBookingSummary;
    this.showBookingSummarysubject.next(this.showBookingSummary);
  }
  onToggleCheckout() {
    return this.checkOutsubject.asObservable();
  }

  toggelCheckOut() {
    this.checkOut = !this.checkOut;
    this.checkOutsubject.next(this.checkOut);
  }
}
function jwt_decode(arg0: string): any {
  throw new Error('Function not implemented.');
}

