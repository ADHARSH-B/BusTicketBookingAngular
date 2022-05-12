import { BusServiceService } from './../../../../core/service/components/bus/bus-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrls: ['./bus-search.component.css']
})
export class BusSearchComponent implements OnInit {

  // @Output() newSeatEvent = new EventEmitter<Object>();


  constructor(private busService:BusServiceService,private router: Router) { }

  
  busSearchForm:any;

  ngOnInit(): void {
    this.busSearchForm=new FormGroup ({
      Departure: new FormControl (null,[Validators.required]),
      Return: new FormControl(null,[Validators.required]),
      Date:new FormControl(null,[Validators.required])
      });

  }
  searchBuses(){
    // console.log('calling calling')
    console.log(this.busSearchForm.value)
    this.router.navigateByUrl(`/busDetails?boardingPoint=${this.busSearchForm.value['Departure']}&arrivalPoint=${this.busSearchForm.value['Return']}&departureDate=${this.busSearchForm.value['Date']}`
    );
    // this.busService.getBusDetails(this.busSearchForm.get('Departure').value,this.busSearchForm.get('Return')
    //   ,this.busSearchForm.get('Date')).subscribe(data=>{
    //     this.router.navigateByUrl('/busDetails');
    //   })
      
  }

}
