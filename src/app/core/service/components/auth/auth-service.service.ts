import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { globalVars } from 'src/app/shared/url.model';
import { UiServiceService } from '../ui/ui-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient,private uiService:UiServiceService) { }
  private isAdminLoggenIn=false;
  private isAdminLoggenInSubject=new Subject<boolean>();

  backendHost=globalVars.backendAPI

  reset_Password_Request:string=`${this.backendHost}api/v1/auth/reset-password-request`
  loginapi:string=`${this.backendHost}api/v1/auth/signin`
  signupapi:string=`${this.backendHost}api/v1/auth/signup`
  changePaasword=`${this.backendHost}api/v1/auth/changePassword`
  
  toggleIsAdminLoggenIn(){
    return this.isAdminLoggenInSubject.asObservable()
  }
  
  onToggleIsAdminLoggenIn(){
    this.isAdminLoggenInSubject.next(this.isAdminLoggenIn)
  }

  loginUser(form:any):Observable<any>{
    const headers={ 'content-type': 'application/json'}
    console.log('im in signin')
    return this.http.post<any>(this.loginapi,form,{'headers':headers})
  }
  signupUser(form:any){
    const headers={ 'content-type': 'application/json'}
    console.log(form)
    return this.http.post<any>(this.signupapi,form,{'headers':headers})
  }
  resetPasswordRequest(form:any){
    return this.http.post<any>(this.reset_Password_Request,form)
  }
  changePassword(form:any){
    return this.http.post<any>(this.changePaasword,form)
  }
}
