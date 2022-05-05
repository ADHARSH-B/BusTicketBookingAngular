import { UiServiceService } from '../../../core/service/components/ui/ui-service.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private uiService:UiServiceService) { }

  ngOnInit(): void {
  console.log(this.uiService)
  }
  loginFormToggleHandler(){
     this.uiService.toggleShowSigninForm()
    
  }

}
