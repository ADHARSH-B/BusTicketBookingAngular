
import { BusServiceService } from './../../../../core/service/components/bus/bus-service.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';

@Component({
  selector: 'app-seat-detail-view',
  templateUrl: './seat-detail-view.component.html',
  styleUrls: ['./seat-detail-view.component.css']
})
export class SeatDetailViewComponent implements OnInit {
  @Input() Seats!:any;
  @Input() busId:any;
  seats:number[]=[];
  selectedSeats:number[]=[];

  constructor(private busService:BusServiceService,private uiService:UiServiceService) { }
  
  
  @Output() newSeatEvent = new EventEmitter<Object>();

  ngOnInit(): void {
  }
  addSeatDetails(event:Event){
    this.seats.push(+(event.target as HTMLInputElement).innerHTML)
  }
  bookTicket(){
    let obj={
      seats:this.seats,
      busId:this.busId
    }
    this.newSeatEvent.emit(obj)
  }
  isSeatSelected(seatId:any){
 
    return this.selectedSeats.includes(seatId);
  }

  toggleSelectedSeats(event:Event){
    
    if(this.selectedSeats.includes(+(event.target as HTMLInputElement).innerHTML)){
      this.selectedSeats=this.selectedSeats.filter(id=>{
        return id!=+(event.target as HTMLInputElement).innerHTML;
      })
      this.seats=this.seats.filter(id=>{
        return id!=+(event.target as HTMLInputElement).innerHTML
      })

    }
    else{
      this.selectedSeats.push(+(event.target as HTMLInputElement).innerHTML)
    }
    console.log('in2',this.selectedSeats)
    console.log('tobook',this.seats)
    return this.isSeatSelected(+(event.target as HTMLInputElement).innerHTML);
    }

  isSeatAvail(){
    console.log(this.seats.length>0)
    return this.seats.length>0;
  }
  
  showBookingsSummary(){
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    this.uiService.toggleshowBookingSummary()
  }

}
