import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
// import {url} from "../../../../../shared/url.model"
@Injectable()
export class JwtInterceptorsInterceptor implements HttpInterceptor {

  constructor(private http:HttpClient) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let modifiedReq;
    if(localStorage.getItem('authtoken')){
    modifiedReq = req.clone({ 
       headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('authtoken')}`),
    });
  }
  else{
  
    return next.handle(req)
  }
  // return next.handle(modifiedReq);
  // return next.handle(modifiedReq)
    return next.handle(modifiedReq).pipe(
      catchError(error=>{
        if(error.status=401){
          return this.http.post("http://65.2.69.74:8080/api/v1/auth/getAccessToken",{"refreshToken":
          localStorage.getItem("refreshToken")}).pipe(
            switchMap((res:any)=>{
              console.log(res)
              localStorage.setItem("authtoken",res.accessToken)
              localStorage.setItem("refreshToken",res.refreshToken)
              return next.handle(req.clone({
                headers: req.headers.set('Authorization', `Bearer ${res.accessToken}`),
              }))
            })
          )
        }
        return throwError(()=>error)
      })
    );
}
  
}
