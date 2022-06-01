import { BusServiceService } from './../../../../core/service/components/bus/bus-service.service';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';
import { filter, of } from 'rxjs';


@Component({
  selector: 'app-bus-details-view',
  templateUrl: './bus-details-view.component.html',
  styleUrls: ['./bus-details-view.component.css']
})
export class BusDetailsViewComponent implements OnInit{

  viewSeat:number[]=[];
  @Input() newSeatEvent!:any;
  busDetails:any[]=[];
  storeBusDetails:any[]=[];
  newBusDetails:any[]=[]
  loading=true
  canShowFilters=false
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
        console.log("im in busdetails")
         this.getBusDetails(data)
       })
      })
  }
  check(e:any){
    console.log(e.target.value)
  }
  toggleShowFilter(){
    this.canShowFilters=!this.canShowFilters
  }
  filter(busType:any,seatType:any,cost:any){
    console.log("hii",this.busDetails)
    if(this.busDetails.length==0){
      this.busDetails=this.storeBusDetails
      console.log(this.busDetails)
    }
    if(busType=='All' && seatType=='All'){
      this.busDetails=this.storeBusDetails
      console.log(this.busDetails)
      return
    }
    if(busType=='All'){
      console.log('hey')
      this.busDetails=this.busDetails.filter((data)=>{
        return data.busSeats[0].seatType.toUpperCase()==seatType.toUpperCase()
        })
      // of(this.busDetails).pipe(filter((data)=>{
      //   console.log(data)
      //   return true
      //   // return data.busSeats[0].seatType.toUpperCase()==seatType.toUpperCase()
      //   }))
    }
    else if(seatType=='All'){
      this.busDetails=this.busDetails.filter((data)=>{
        return data.busType.toUpperCase()==busType.toUpperCase()
        })
    }
    else{
      this.busDetails=this.busDetails.filter((data)=>{
        return data.busSeats[0].seatType.toUpperCase()==seatType.toUpperCase() && data.busType.toUpperCase()==busType.toUpperCase()
        })
    }
  }
  filterByPrice(busType:any,seatType:any,cost:any){
    if(cost.startsWith("High")){
      this.busDetails.sort((a,b)=>{
        return b.price-a.price
      })
    }
   else{

    this.busDetails.sort((a,b)=>{
      return a.price-b.price
    })
   }

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

 
 
  getBusDetails(data:any){
    this.busService.getBusDetails(data['boardingPoint'],data['arrivalPoint'],data['departureDate']).subscribe(data=>{
      this.loading=false
      console.log("came")
      console.log(data)
      this.busDetails= data 
      this.storeBusDetails=data
      this.busDetails.sort((a,b)=>{
        return a.price-b.price
      })
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
