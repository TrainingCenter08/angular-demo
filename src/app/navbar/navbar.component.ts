import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NavService]
})
export class NavbarComponent {

  constructor(private navService: NavService){}
  onSelectMenuItem(menuItem: string){
    this.navService.setMenuItemAsync(menuItem);
  }

}
