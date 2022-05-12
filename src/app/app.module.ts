// import { AdminRouteGuardComponent } from './service/components/auth/admin-guard/admin-route-guard/admin-route-guard.component';
import { httpInterceptProviders } from './core/service/components/interceptors/jwt/jwt';
import { FormModule } from './features/forms/form.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpinnerCircularModule } from 'spinners-angular/spinner-circular';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DateConverterPipePipe } from 'src/app/shared/components/pipes/date-converter-pipe.pipe';
// import { FontAwesomeModule } from '@fontawesome/angular-fontawesome'
//  import { BusDetailsViewComponent } from './features/busDetails/components/bus-details-view/bus-details-view.component';

@NgModule({
  declarations: [
    AppComponent,
    // AdminRouteGuardComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule ,
    FeaturesModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SpinnerCircularModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    // DateConverterPipePipe,
    // FontAwesomeModule
    // FormsModule,
    FormModule
  ],
  providers: [ httpInterceptProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
