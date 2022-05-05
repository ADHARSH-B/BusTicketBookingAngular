
import { UiServiceService } from "../../../../core/service/components/ui/ui-service.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-seats-summary',
  templateUrl: './confirm-seats-summary.component.html',
  styleUrls: ['./confirm-seats-summary.component.css']
})
export class ConfirmSeatsSummaryComponent implements OnInit {
  showBookingsSummary:boolean=false;
  constructor(private uiService:UiServiceService) { 
    this.uiService.onToggleBookingSummary().subscribe(value=>{
      console.log("booking summary called",value)
      this.showBookingsSummary=value})
  }

  ngOnInit(): void {
  }
  canShowBookingsSummarys(){
    this.uiService.toggleshowBookingSummary() 
  }
  showPassengerDetailForm(){
    this.uiService.toggelCheckOut();
  }
}
