import { AdminService } from 'src/app/core/service/components/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';
import { BusServiceService } from 'src/app/core/service/components/bus/bus-service.service';

@Component({
  selector: 'app-bus-route-details',
  templateUrl: './bus-route-details.component.html',
  styleUrls: ['./bus-route-details.component.css']
})
export class BusRouteDetailsComponent implements OnInit {
  routeDetails:any;
  canShowSidebar=true
  routeDetailsStore:any;
  boardingPoint="";
  arrivalPoint="";
  loading=true
  constructor(private adminService:AdminService,private uiService:UiServiceService,
    private busService:BusServiceService) { 
    this.routeDetails=[]
  }

  ngOnInit(): void {
    this.getAllRoutes()
   
     this.uiService.toggleSideBar().subscribe(data=>this.canShowSidebar=data)
     this.uiService.refreshRequired().subscribe(()=>{
      this.getAllRoutes()
     }) 
  }
  setBoardingPoint(value:any){
    this.boardingPoint=value.toUpperCase()
  }
  setArrivalPoint(value:any){
    this.arrivalPoint=value
  }

  fliterByBoardingAndDestination(){
    console.log("hey guys",this.boardingPoint,this.arrivalPoint)
    if(this.boardingPoint=="" && this.arrivalPoint==""){
 
      this.routeDetails=this.routeDetailsStore
    }
    else if(this.boardingPoint!="" && this.arrivalPoint==""){
     
      this.routeDetails=this.routeDetailsStore.filter((data:any)=>{
        return data.boardingPoint.toUpperCase()==this.boardingPoint.toUpperCase()
      })
    }
    else if(this.boardingPoint=="" && this.arrivalPoint!=""){
      this.routeDetails=this.routeDetailsStore.filter((data:any)=>{
        return data.destinationPoint.toUpperCase()==this.arrivalPoint.toUpperCase()
      })
    }
    else{
      this.routeDetails=this.routeDetailsStore.filter((data:any)=>{
      
        return data.boardingPoint.toUpperCase()==this.boardingPoint.toUpperCase() &&
        data.destinationPoint.toUpperCase()==this.arrivalPoint.toUpperCase()
      })
    }
  }
  getAllRoutes(){
    this.adminService.getAvailableRoutes().subscribe(
      data=>{
        this.routeDetails=data
        console.log(data)
        this.loading=false
        this.routeDetailsStore=data
      })
  }
  togglingSidebar(){
    this.uiService.onToggleSidebar();
  }
  addStation(){
   
    this.uiService.ontoggleAddStation();
    

  }



  

}
