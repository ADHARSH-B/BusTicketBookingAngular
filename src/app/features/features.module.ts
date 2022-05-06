import { BusSearchModule } from './bus-search/bus-search.module';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from './forms/form.module';
import { BusDetailsModule } from './bus-details/bus-details.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    ,BrowserModule
  ],
  exports:[
    BusDetailsModule,
    FormModule ,
    BusSearchModule
  ]
})
export class FeaturesModule { }
