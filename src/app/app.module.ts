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
// import { FontAwesomeModule } from '@fontawesome/angular-fontawesome'
//  import { BusDetailsViewComponent } from './features/busDetails/components/bus-details-view/bus-details-view.component';

@NgModule({
  declarations: [
    AppComponent,
 
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
    // FontAwesomeModule
    // FormsModule,
    FormModule
  ],
  providers: [ httpInterceptProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
