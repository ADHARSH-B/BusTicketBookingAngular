import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UiServiceService } from '../ui/ui-service.service';

@Injectable({
  providedIn: 'root'
})
export class BusServiceService {

  constructor(private http:HttpClient,private uiService:UiServiceService) { }

  apiBusDetails:string="http://localhost:8080/api/v1/user/searchBuses?boardingPoint=coimbatore&destinationPoint=chennai"
  apiBookTicket:string="http://localhost:8080/api/v1/user/bookTickets"
  apiBookings:string="http://localhost:8080/api/v1/user/getBookings"
  getBusDetails(boardingPoint:any,destinationPoint:any,date:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/v1/user/searchBuses?boardingPoint=${boardingPoint}&destinationPoint=${destinationPoint}&departureDate=${date}`)
    
  }

  bookTicket(seats:any){
    return this.http.post(this.apiBookTicket,seats,{responseType:"text"})
    .pipe(tap(()=>{
      console.log("im in tap")
      this.uiService.refreshRequired().next()
    }));
  }
  getBookingDetails(userName:any){
    return this.http.get(this.apiBookings+"/"+userName)
  }
}
