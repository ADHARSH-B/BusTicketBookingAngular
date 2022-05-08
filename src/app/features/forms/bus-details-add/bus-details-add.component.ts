import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { AdminService } from 'src/app/core/service/components/admin/admin.service';

@Component({
  selector: 'admin-bus-details-add',
  templateUrl: './bus-details-add.component.html',
  styleUrls: ['./bus-details-add.component.css']
})
export class BusDetailsAddComponent implements OnInit {
  showBusAddForm!:boolean;
  addForm!:any;
  busDetails:any
  constructor(private adminService:AdminService, private uiService:UiServiceService,private route:ActivatedRoute,private router:Router) {
    console.log("im calling y")
    this.uiService.ontogglebusDetailsAddForm().subscribe(data=>{
      console.log('checking',data)
      this.showBusAddForm=data
    });
    this.addForm=new FormGroup ({
            BusOperatorName:new FormControl(null,[Validators.required]),
            BoardingPoint:new FormControl(null,[Validators.required]),
            currentLocation:new FormControl(null,[Validators.required]),
            departureDate:new FormControl(null,[Validators.required]),
            DestinationPoint: new FormControl (null,[Validators.required]),
            totalSeats:new FormControl(null,[Validators.required]),
            SeatsBooked:new FormControl(null,[Validators.required]),
            seatType:new FormControl(null,[Validators.required]),
            // BusType:new FormControl(this.busDetails?.busType,[Validators.required]),
            DepartureTime:new FormControl(null,[Validators.required]),
            ArrivalTime:new FormControl(null,[Validators.required]),
            AddSeats:new FormControl(0,[Validators.required]),
            busType:new FormControl(null,[Validators.required]),
            price:new FormControl(null,[Validators.required])
            });     
  }
  ngOnInit(): void {
    
  }
  toggleAddBusFormView(){
    this.uiService.togglebusDetailsAddForm();
    // this.uiService.ontogglebusDetailsAddForm().subscribe(data=>console.log(data))
    // this.router.navigateByUrl('/admin-dashboard')
  }
  addBus(){
    this.adminService.addBus(this.addForm.value).subscribe(data=>{
      console.log(data)
    })
  }

}
