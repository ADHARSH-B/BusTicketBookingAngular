import { JwtInterceptorsInterceptor } from './jwt-interceptors.interceptor';
import { HTTP_INTERCEPTORS } from "@angular/common/http";

export const httpInterceptProviders=[
    {
        provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorsInterceptor,multi:true
    }
]