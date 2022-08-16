import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angular-demo';
  user = {
    "name" : "Phanupong", 
    "imageUrl" : "https://fakeimg.pl/250x100/"
  };
  color = 'red';

  log(){
    console.log('Button Click!');
  }
}
