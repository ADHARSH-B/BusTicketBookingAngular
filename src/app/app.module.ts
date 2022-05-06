import { FormModule } from './features/forms/form.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FeaturesModule } from './features/features.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnersAngularModule } from 'spinners-angular';

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
    HttpClientModule,
    ReactiveFormsModule,
    SpinnersAngularModule,
    // FormsModule,
    FormModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
