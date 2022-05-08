import { Component, OnInit, Output } from '@angular/core';
import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';
import {Router} from"@angular/router"
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private uiService:UiServiceService,private router:Router) { }
  canShow!:any;
  ngOnInit(): void {
    this.router.navigateByUrl('/admin-dashboard')
      
  }
  toggleEditForm(){
    this.uiService.toggleuserDetailsEditForm();
  }

}
