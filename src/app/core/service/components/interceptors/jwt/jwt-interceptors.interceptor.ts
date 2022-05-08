import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptorsInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let modifiedReq;
    if(localStorage.getItem('authtoken')){
    modifiedReq = req.clone({ 
      headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('authtoken')}`),
    });
  }
  else{
    modifiedReq =req;
  }
    return next.handle(modifiedReq);
  }
}
