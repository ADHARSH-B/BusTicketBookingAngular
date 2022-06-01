import { BusSearchModule } from './bus-search/bus-search.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from './forms/form.module';
import { BusDetailsModule } from './bus-details/bus-details.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DateConverterPipePipe } from 'src/app/shared/components/pipes/date-converter-pipe.pipe';
import { FormsModule} from '@angular/forms';
import { PaymentModule } from './payment/payment.module';
@NgModule({
  declarations: [
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
     CommonModule,
     PaymentModule
    //  DateConverterPipePipe 
    // BrowserModule
  ],
  exports:[
    BusDetailsModule,
    FormModule ,
    BusSearchModule,
    PaymentModule
    
  ]
})
export class FeaturesModule { }
