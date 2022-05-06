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

  constructor(private busService:BusServiceService,private router: Router) { }

  
  busSearchForm:any;

  ngOnInit(): void {
    this.busSearchForm=new FormGroup ({
      Departure: new FormControl (""),
      Return: new FormControl(""),
      Date:new FormControl("")
      });

  }
  searchBuses(){
    this.busService.getBusDetails(this.busSearchForm.value.Departure,this.busSearchForm.value.Return
      ,this.busSearchForm.value.Date).subscribe(data=>{
        this.router.navigateByUrl('/busDetails');
      })
      
    
  }

}
