import { BusServiceService } from './../../../../core/service/components/bus/bus-service.service';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';


@Component({
  selector: 'app-bus-details-view',
  templateUrl: './bus-details-view.component.html',
  styleUrls: ['./bus-details-view.component.css']
})
export class BusDetailsViewComponent implements OnInit, OnDestroy{

  viewSeat:number[]=[];
  @Input() newSeatEvent!:any;
  busDetails:any[]=[];
  newBusDetails:any[]=[]
  bookingsSummary={
    
  }
  constructor(private busService:BusServiceService,private router:ActivatedRoute
    ,private uiService:UiServiceService) { 
    
    // this.router.queryParams.subscribe(data=>{
    //   this.getBusDetails(data)
    //   })
  }
  // getMonth(x:String):String{
  //   const date=x.split("-");
  //   return new DateAndTime().getMonth(date[1]);
  // }
  // getDay(x:string):string{
  //   return this.getDay(x)
  // }

  ngOnInit(): void {
    
    this.router.queryParams.subscribe(data=>{
      console.log(data)
      this.getBusDetails(data)
      this.uiService.refreshRequired().subscribe(()=>{
         this.getBusDetails(data)
       })
      })
  }
  calculateDifference(t1:any,t2:any){
    const time1=t1.split(":")
    const time2=t2.split(":")
    console.log(time1[0])
    console.log(time2[0])
    const hour=Math.abs(time1[0]-time2[0])
    const min =Math.abs(time2[1]-time2[1])
    return hour+"h "+min+"m"
  }

 
  ngOnDestroy(): void {
    this.uiService.refreshRequired().unsubscribe()
  }
  getBusDetails(data:any){
    this.busService.getBusDetails(data['boardingPoint'],data['arrivalPoint'],data['departureDate']).subscribe(data=>{
      this.busDetails= data 
    }); 
  }
  
  bookTicket(event:any){
    this.busService.bookTicket(event)
    .subscribe(data=>{
     
     console.log(data)
    })
  }

  canShowSeat(busId:number){
    return this.viewSeat.includes(busId);
  }
  toggleShowSeats(busId:number){
    console.log(this.viewSeat,busId)
    if(this.viewSeat.includes(busId)){
      this.viewSeat=this.viewSeat.filter(id=>{
        return id!=busId
      })
    }
    else{
    this.viewSeat.push(busId);
    }
    console.log(this.viewSeat)
  }

}
