import { BusServiceService } from './../../../../core/service/components/bus/bus-service.service';

import { UiServiceService } from "../../../../core/service/components/ui/ui-service.service";
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-seats-summary',
  templateUrl: './confirm-seats-summary.component.html',
  styleUrls: ['./confirm-seats-summary.component.css']
})
export class ConfirmSeatsSummaryComponent implements OnInit {
  showBookingsSummary:boolean=false;
  @Input() bookingSummary!:any;
  @Input() bus!:any;
  constructor(private uiService:UiServiceService,private busService:BusServiceService) { 
    this.uiService.onToggleBookingSummary().subscribe(value=>{
      console.log("booking summary called",this.bookingSummary)
      this.showBookingsSummary=value})
  }

  ngOnInit(): void {
    console.log(this.bus)
  }
  calculateTotalPrice(price:number){
    return price*this.bookingSummary.length;
  }
  canShowBookingsSummarys(){
    console.log(this.bookingSummary)
    this.uiService.toggleshowBookingSummary() 
  }
  showPassengerDetailForm(){
    this.uiService.toggelCheckOut();
  }
  bookTicket(){
    let obj={
      seats:this.bookingSummary,
      busId:this.bus.id
    }
    this.busService.bookTicket(obj).subscribe(data=>{
      console.log('Tickets Booked');
    })
  }
}
