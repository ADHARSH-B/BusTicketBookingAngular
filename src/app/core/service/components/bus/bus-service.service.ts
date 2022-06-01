import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UiServiceService } from '../ui/ui-service.service';
import { globalVars } from 'src/app/shared/url.model';
@Injectable({
  providedIn: 'root'
})
export class BusServiceService {

  constructor(private http: HttpClient, private uiService: UiServiceService) { }
  backendHost = globalVars .backendAPI

  apiBusDetails: string = `${this.backendHost}api/v1/user/searchBuses?boardingPoint=coimbatore&destinationPoint=chennai`
  apiBookTicket: string = `${this.backendHost}api/v1/user/bookTickets`
  apiBookings: string = `${this.backendHost}api/v1/user/getBookings`
  getBusDetails(boardingPoint: any, destinationPoint: any, date: any): Observable<any> {
    return this.http.get(`${this.backendHost}api/v1/user/searchBuses?boardingPoint=${boardingPoint}&destinationPoint=${destinationPoint}&departureDate=${date}`)

  }

  bookTicket(seats: any) {
    return this.http.post(this.apiBookTicket, seats, { responseType: "text" })
    // .pipe(tap(()=>{
    //   console.log("im in tap")
    //   this.uiService.refreshRequired().next()
    // }));
  }
  getBookingDetails(userName: any) {

    return this.http.get(this.apiBookings + "/" + userName)
  }

  getAllRoutes() {
    return this.http.get(`${this.backendHost}api/v1/user/getAllRoutes`)
  }

  getTicket(bookingid: any) {
    return this.http.get(`${this.backendHost}api/v1/user/pdf/generate/${bookingid}`,
      { responseType: "arraybuffer" })
  }
}
