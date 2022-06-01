import { BusServiceService } from './../../../../core/service/components/bus/bus-service.service';

import { UiServiceService } from "../../../../core/service/components/ui/ui-service.service";
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-confirm-seats-summary',
  templateUrl: './confirm-seats-summary.component.html',
  styleUrls: ['./confirm-seats-summary.component.css']
})
export class ConfirmSeatsSummaryComponent implements OnInit {
  showBookingsSummary:boolean=false;
  @Input() bookingSummary!:any;
  @Input() bus!:any;
  booking=false
  user!:any;
  constructor(private uiService:UiServiceService,private busService:BusServiceService
    ,private toast:ToastrService) { 
    this.uiService.onToggleBookingSummary().subscribe(value=>{
      console.log(value)
      console.log("booking summary called",this.bookingSummary)
      this.showBookingsSummary=value})
  }
  getMonth(x:String):String{
    const date=x.split("-")
    return new DateAndTime().getMonth(date[1]);
  }
  getWeekDay(x:string):String{
    console.log("im checking",new Date(x).getDay())
    return new DateAndTime().getWeekDay(new Date(x).getDay());
  }
  getDay(x:any){
    return x.split('-')[2]
  }

  ngOnInit(): void {
    console.log(this.bus)
  }
  calculateTotalPrice(price:number){
    return price*this.bookingSummary.length;
  }
  canShowBookingsSummarys(){
    console.log(this.bookingSummary)
    this.booking=false
    this.uiService.toggleshowBookingSummary()
  }
  showPassengerDetailForm(){
    this.uiService.toggelCheckOut();
  }
  bookTicket(price:any){
    
    // this.uiService.ontoggleShowPassengerForm();
    try{
    this.user=jwtDecode(localStorage.getItem("authtoken")!)
    }
    catch(error){
      this.toast.error("Please login to book your ticket")
      return
    }
    if(this.user==null){
      this.toast.error("Please login to book your ticket")
      console.log("hi")
      return
    }
    this.booking=true
    console.log(this.user.sub)
    let obj={
      seats:this.bookingSummary,
      busId:this.bus.id,
      userName:this.user.sub,
      totalCost:price*this.bookingSummary.length
    }
    console.log(obj)
    this.busService.bookTicket(obj).subscribe(data=>{
     
      this.canShowBookingsSummarys();
      this.toast.success("Your Ticket is Booked")
      console.log('Tickets Booked');
      this.uiService.refreshRequired().next()
    })
  }
}






class DateAndTime{
  date!:any;
  day!:any
  month!:any;
  year!:any
 
  getWeekDay(x:any):String{
      switch(x){
          case 1:
              return 'Monday'
          case 2:
              return 'Tuesday'
          case 3:
              return 'Wednesday'
          case 4:
              return 'Thursday'
          case 5:
               return 'Friday'
          case 6:
              return 'Saturday'
          case 7:
              return 'Sunday'
          default:
              return "Invalid Day"
      }
  }
 
  
  getMonth(x:any):String{
      switch(x){
          case "01":
              return 'January'
          case "02":
              return 'February'
          case "03":
              return 'March'
          case "04":
              return 'April'
          case "05":
               return 'May'
          case "06":
              return 'June'
          case "07":
              return 'July'
          case "08":
              return 'August'
          case "07":
              return 'September'
          case "07":
              return 'October'
          case "07":
              return 'November'
          case "07":
              return 'De'
          default:
              return ""
      }
  }
}