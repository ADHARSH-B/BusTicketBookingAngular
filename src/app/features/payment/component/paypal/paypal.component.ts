import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
 import {render} from 'creditcardpayments/creditCardPayments'
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  constructor(private toast:ToastrService) {
    render({
      id: '#paypalButton',
      value: '100',
      currency: 'USD',
      onApprove:(()=>{
    
        this.toast.success("payment success")
      })
    })
    }
    
  ngOnInit(): void {
  
  }

//   paymentRequest:google.payments.api.PaymentDataRequest={
//     apiVersion:2,
//     apiVersionMinor:0,
//     allowedPaymentMethods:[
//       {
//         type:'CARD',
//         parameters:{
//           allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
//           allowedCardNetworks:['AMEX','VISA','MASTERCARD']
//         },
//         tokenizationSpecification:{
//           type:'PAYMENT_GATEWAY',
//           parameters:{
//             gateway:'example',
//             gatewayMerchantId:'exampleGatewayMerchantId'
//           }
//         }
//       }
//     ],
//     merchantInfo:{
//       merchantId:"12345678901234567890",
//       merchantName:"Demo Merchant"
//     },
//     transactionInfo:{
//       totalPriceStatus:"FINAL",
//       totalPriceLabel:"Total",
//       totalPrice:"0.10",
//       currencyCode:'EUR',
//       countryCode:"BE"
//     },
//     callbackIntents:[
//       'PAYMENT_AUTHORIZATION'
//     ]
//   }
//     onLoadPaymentData=(
// event:Event
//     ):void=>{
//       const eventDetail=event as CustomEvent<google.payments.api.PaymentData>
    // }
    // onPaymentDataAuthorized:google.payments.api.PaymentAuthorizationResult=(
    //   paymenData
    // )=>{
    //   console.log("data")
    // }
    // merchantInfo: undefined,
    // apiVersion: 0,
    // apiVersionMinor: 0,
    // allowedPaymentMethods: [],
    // transactionInfo: undefined
  }

// }
