import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaypalComponent } from './component/paypal/paypal.component';
import {GooglePayButtonModule} from '@google-pay/button-angular'


@NgModule({
  declarations: [
    PaypalComponent
  ],
  imports: [
    CommonModule,
    GooglePayButtonModule
  ],
  exports:[
    PaypalComponent
  ]
  // ,providers:[{ provide: Window, useValue: window }]
})
export class PaymentModule { }
