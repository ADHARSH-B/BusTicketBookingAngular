import { BusServiceService } from './../../../core/service/components/bus/bus-service.service';
import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
@Component({
  selector: 'app-bookings-view',
  templateUrl: './bookings-view.component.html',
  styleUrls: ['./bookings-view.component.css']
})
export class BookingsViewComponent implements OnInit {
  user!:any;
  constructor(private busService:BusServiceService) { }
  bookings!:any;
  viewticketId=-1
  loading=true;
  ngOnInit(): void {
    this.user=jwtDecode(localStorage.getItem("authtoken")!)
    this.bookings=[]
    this.busService.getBookingDetails(this.user.sub).subscribe(value=>{
        this.loading=false
      console.log(value)
      this.bookings=value
      console.log(this.bookings[0].bookingDate)
      const t=this.bookings[0].bookingDate.split(/[- :]/);
      console.log(t)
      const d=new Date(Date.UTC(t[0], t[1]-1, t[2]));
      console.log(d)
    });
  }
  getMonth(x:String):String{
    const date=x.split("-")
    return new DateAndTime().getMonth(date[1]);
  }
  getWeekDay(x:string):String{
   
    return new DateAndTime().getWeekDay(new Date(x).getDay());
  }
  getDay(x:any){
    return x.split('-')[2]
  }
  getBookingDate(date:any){
      return date.split("T")[0]
  }
  viewTicket(bookingid:any){
      this.viewticketId=bookingid

      this.busService.getTicket(bookingid).subscribe({
          next:(data)=>{
              this.viewticketId=-1
              
            var file = new Blob([data], { type: 'application/pdf' });
            var fileURL = URL.createObjectURL(file);
    
            window.open(fileURL);
          }
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
          case 0:
              return 'Monday'
          case 1:
              return 'Tuesday'
          case 2:
              return 'Wednesday'
          case 3:
              return 'Thursday'
          case 4:
               return 'Friday'
          case 5:
              return 'Saturday'
          case 6:
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