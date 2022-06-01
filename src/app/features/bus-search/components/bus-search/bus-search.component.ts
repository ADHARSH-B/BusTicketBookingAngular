
import { BusServiceService } from './../../../../core/service/components/bus/bus-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrls: ['./bus-search.component.css']
})
export class BusSearchComponent implements OnInit {

  // @Output() newSeatEvent = new EventEmitter<Object>();


  constructor(private busService:BusServiceService,private router: Router,
    private toast:ToastrService) { }

  routes:any
  busSearchForm:any;
  boardingPoint:string[]=[]
  arrivalPoint:string[]=[]

  ngOnInit(): void {
    this.busSearchForm=new FormGroup ({
      Departure: new FormControl (null,[Validators.required,Validators.pattern('[-_a-zA-Z]*')]),
      Return: new FormControl(null,[Validators.required,Validators.pattern('[-_a-zA-Z]*')]),
      Date:new FormControl(null,[Validators.required])
      });
      this.busService.getAllRoutes().subscribe({
        next:(data:any)=>{
          this.routes=new Set(data)
         this.routes.forEach((data:any)=>{
           if(!this.boardingPoint.includes(data.boardingPoint)){
             this.boardingPoint.push(data.boardingPoint)
           }
           if(!this.arrivalPoint.includes(data.destinationPoint)){
            this.arrivalPoint.push(data.destinationPoint)
          }
         })

         
        }
  })

  }
  searchBuses(){
    console.log(this.busSearchForm)
    
    if(this.busSearchForm.status=="INVALID"){
      if(this.busSearchForm.controls.Departure.status=="INVALID"){
        this.toast.error("Invalid Departure Location")
        return
      }
      else if(this.busSearchForm.controls.Return.status=="INVALID"){
        this.toast.error("Invalid Arrival Location")
        return
      }
      else if(this.busSearchForm.controls.Date.status="INVALID"){
        this.toast.error("Invalid Date")
        return
      }
     
    }
    this.router.navigateByUrl(`/busDetails?boardingPoint=${this.busSearchForm.value['Departure']}&arrivalPoint=${this.busSearchForm.value['Return']}&departureDate=${this.busSearchForm.value['Date']}`
    );
    
      
  }

}
