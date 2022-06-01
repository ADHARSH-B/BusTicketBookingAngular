import { UiServiceService } from 'src/app/core/service/components/ui/ui-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private uiService:UiServiceService) { 
    console.log(window.innerWidth)
  }
  canShowBackdrop=false;
  
  ngOnInit(): void {
    this.uiService.toggleSideBar().subscribe(data=>this.canShowBackdrop=data)
  }
  togglingSidebar(){
    this.uiService.onToggleSidebar()
  }

  canShowToggleIcon(){
    return window.innerWidth<=500
  }

}
