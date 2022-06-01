import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, tap } from 'rxjs';
import { UiServiceService } from '../ui/ui-service.service';
import { globalVars } from 'src/app/shared/url.model';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient,private uiService:UiServiceService) { }
  backendHost=globalVars.backendAPI
  getAllUsers():Observable<any>{
    return this.http.get<any>(`${this.backendHost}api/v1/admin/allUsers`);
  }
  getUser(id:any):Observable<any>{
    return this.http.get<any>(`${this.backendHost}api/v1/admin/user/${id}`);
  }
  updateUser(id:any,UserName:any,name:any,role:any,email:any){
   return this.http.put<any>(`${this.backendHost}api/v1/admin/user/${id}`,
   {"name":name,
   "role":role,
   "UserName":UserName,
   "email":email});
  }
  deleteUser(id:any){
    return this.http.delete(`${this.backendHost}api/v1/admin/user/${id}`)
    .pipe(tap(()=>{
      return this.uiService.refreshRequired().next()
    }))
  }

  getAllBusDetails():Observable<any>{
    return this.http.get(`${this.backendHost}api/v1/admin/getAllBuses`);
  }
  getBusDetails(id:any){
    return this.http.get(`${this.backendHost}api/v1/admin/bus/${id}`)
  }
  addBus(form:any){
    return this.http.post(`${this.backendHost}api/v1/admin/addBus`
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
    currentLocation:form.currentLocation,
    ArrivalDate:form.ArrivalDate
    }).pipe(tap(()=>{
      return this.uiService.refreshRequired().next()
    }))
  }
  updateBusDetails(id:any,form:any){
    const headers={ 'content-type': 'application/json'}
    console.log('im in update bus')
    return this.http.put<any>(`${this.backendHost}api/v1/admin/updatebus/${id}`,{
    // return this.http.put<any>(`http://localhost:8080/api/v1/admin/updatebus/${id}`,{
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
    ArrivalDate:form.ArrivalDate,
    DepartureDate:form.DepartureDate
    })
    .pipe(tap(()=>{
      return this.uiService.refreshRequired().next()
    }))
  }
  deleteBus(id:any){
    return this.http.delete(`${this.backendHost}api/v1/admin/deletebus/${id}`)
  }

  getAvailableRoutes(){
    return this.http.get(`${this.backendHost}api/v1/admin/getAllRoutes`)
  }

  addRoute(routeDetails:any){
    return this.http.post(`${this.backendHost}api/v1/admin/addNewRoute`,{
      boardingPoint:routeDetails.boardingPoint,
      destinationPoint:routeDetails.destinationPoint,
      stations:routeDetails.stations
    }) 
  }

}
