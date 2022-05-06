import { BusServiceService } from './../../../../core/service/components/bus/bus-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bus-details-view',
  templateUrl: './bus-details-view.component.html',
  styleUrls: ['./bus-details-view.component.css']
})
export class BusDetailsViewComponent implements OnInit {

  viewSeat:number[]=[];
  @Input() newSeatEvent!:any;
  busDetails!:any;
  constructor(private busService:BusServiceService) { 
    this.busService.getBusDetails('coimbatore','chennai','2022-05-05').subscribe(data=>
         this.busDetails= data
        ); 
  }

  ngOnInit(): void {
    console.log('component mounted')
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
