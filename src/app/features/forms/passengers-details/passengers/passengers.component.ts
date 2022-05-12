import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {

  constructor(private uiService:UiServiceService) { }
  showForm:boolean=true
  ngOnInit(): void {
    this.uiService.toggleShowPassengerForm().subscribe(data=>{
      this.showForm=data
    })
  }

}
