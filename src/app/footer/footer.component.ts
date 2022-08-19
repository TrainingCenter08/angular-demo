import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavService } from '../navbar/nav.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [NavService]
})
export class FooterComponent implements OnInit{
  menuSelectedItem = "Home"

  constructor(private navService: NavService){}

  ngOnInit(): void {
    this.navService.getMenuItemAsync()
            .subscribe(menuItem => this.menuSelectedItem = menuItem);
  }
}
