import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AdminRouteGuardGuard implements CanActivate {
  constructor(private toast:ToastrService,private router:Router){

  }
  getDecodedAccessToken(token: string): any {
      return jwt_decode(token);
  }
  canAccess:boolean=false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.canAccess=false;
    if(localStorage.getItem("authtoken")){
      const decryptedToken=this.getDecodedAccessToken(localStorage.getItem("authtoken")!);
      
         decryptedToken["role"].forEach((rol: { [x: string]: string; })=>{
           if(rol["authority"]== "ADMIN"){
             this.canAccess=true
           }
        })
        if(!this.canAccess){
        return this.router.navigateByUrl("/home")
        }
   return this.canAccess; 
    }
    else{
      this.toast.error("You are not authorised")
      return this.router.navigateByUrl("/home")
    }
    
  }
  
}

jwt_decode ("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aXZpbjEyMzQiLCJleHAiOjE2NTIxMjA1NTgsImlhdCI6MTY1MjA4NDU1OH0.s0AAJbyYDHe1EiDa7nUjRe3UX15-5-G8GvWpaFKIqEI");