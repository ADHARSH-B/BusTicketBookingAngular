import { AdminService } from 'src/app/core/service/components/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';

@Component({
  selector: 'app-bus-route-details',
  templateUrl: './bus-route-details.component.html',
  styleUrls: ['./bus-route-details.component.css']
})
export class BusRouteDetailsComponent implements OnInit {
  routeDetails:any;
  constructor(private adminService:AdminService,private uiService:UiServiceService) { }

  ngOnInit(): void {
   this.adminService.getAvailableRoutes().subscribe(
     data=>{
       this.routeDetails=data
       console.log(data)
     })
  }
  addStation(){
   
    this.uiService.ontoggleAddStation();

  }



  

}
