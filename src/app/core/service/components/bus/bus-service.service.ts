import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusServiceService {

  constructor(private http:HttpClient) { }

  apiBusDetails:string="http://localhost:8080/api/v1/user/searchBuses?boardingPoint=coimbatore&destinationPoint=chennai"
  apiBookTicket:string="http://localhost:8080/api/v1/user/bookTickets"
  apiBookings:string="http://localhost:8080/api/v1/user/getBookings"
  getBusDetails(boardingPoint:any,destinationPoint:any,date:any):Observable<any>{
    destinationPoint="chennai";
    boardingPoint="coimbatore";
    date="2022-05-05";
    const headers={ 'content-type': 'application/json'}
    console.log(date)
    console.log(`http://localhost:8080/api/v1/user/searchBuses?boardingPoint=${boardingPoint}&destinationPoint=${destinationPoint}&departureDate=${date}`)
    return this.http.get("http://localhost:8080/api/v1/user/searchBuses?boardingPoint=chennai&destinationPoint=coimbatore&departureDate=2022-05-05")
  }

  bookTicket(seats:any){
    return this.http.post(this.apiBookTicket,seats,{responseType:"text"});
  }
  getBookingDetails(){
    return this.http.get(this.apiBookings)
  }
}
