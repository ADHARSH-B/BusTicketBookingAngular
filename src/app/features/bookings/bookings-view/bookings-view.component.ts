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
  ngOnInit(): void {
    this.user=jwtDecode(localStorage.getItem("authtoken")!)
    this.busService.getBookingDetails(this.user.sub).subscribe(value=>{
      console.log(value)
      this.bookings=value
      console.log(this.bookings[0].bookingDate)
      const t=this.bookings[0].bookingDate.split(/[- :]/);
      console.log(t)
      const d=new Date(Date.UTC(t[0], t[1]-1, t[2]));
      console.log(d)
    });
  }
  printTicket(i:any){
    console.log(i)
  }
}
