import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  private isAdminLoggenIn=false;
  private isAdminLoggenInSubject=new Subject<boolean>();

  loginapi:string="http://localhost:8080/api/v1/auth/signin"
  signupapi:string="http://localhost:8080/api/v1/auth/signup"
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
    return this.http.post<any>(this.signupapi,form)
  }
}
