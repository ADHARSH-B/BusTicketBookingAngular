import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get<any>("http://localhost:8080/api/v1/admin/allUsers");
  }
  getUser(id:any):Observable<any>{
    return this.http.get<any>(`http://localhost:8080/api/v1/admin/user/${id}`);
  }
  updateUser(id:any,UserName:any,name:any,role:any,email:any){
   return this.http.put<any>(`http://localhost:8080/api/v1/admin/user/${id}`,
   {"name":name,
   "role":role,
   "UserName":UserName,
   "email":email});
  }
  deleteUser(id:any){
    return this.http.delete(`http://localhost:8080/api/v1/admin/user/${id}`)
  }

  getAllBusDetails():Observable<any>{
    return this.http.get("http://localhost:8080/api/v1/admin/getAllBuses");
  }
  getBusDetails(id:any){
    return this.http.get(`http://localhost:8080/api/v1/admin/bus/${id}`)
  }
  addBus(form:any){
    return this.http.post('http://localhost:8080/api/v1/admin/addBus'
    ,{
    BusOperatorName:form.BusOperatorName,
    BoardingPoint:form.BoardingPoint,
    DestinationPoint:form.DestinationPoint,
    SeatType:form.seatType,
    TotalSeats:form.totalSeats,
    DepartureTime:form.DepartureTime,
    ArrivalTime:form.ArrivalTime,
    AddSeats:form.AddSeats,
    busType:form.busType,
    ticketPrice:form.price,
    departureDate:form.departureDate,
    currentLocation:form.currentLocation
    })
  }
  updateBusDetails(id:any,form:any){
    console.log(id)
    console.log(form.BusOperatorName)
    console.log(form)
//  BusOperatorName:any, BoardingPoint:any,
    // DestinationPoint:any,SeatType:any ,TotalSeats:any,DepartureTime:any,
    // ArrivalTime:any
    const headers={ 'content-type': 'application/json'}
    return this.http.put<any>(`http://localhost:8080/api/v1/admin/updatebus/${id}`,{
     BusOperatorName:form.BusOperatorName,
    BoardingPoint:form.BoardingPoint,
    DestinationPoint:form.DestinationPoint,
    SeatType:form.seatType,
    TotalSeats:form.totalSeats,
    DepartureTime:form.DepartureTime,
    ArrivalTime:form.ArrivalTime,
    AddSeats:form.AddSeats,
    busType:form.busType,
    ticketPrice:form.price
    })
    
  }

}
// BusOperatorName,
//     BoardingPoint,
//     DestinationPoint,
//     SeatType,
//     TotalSeats,
//     DepartureTime,
//     ArrivalTime