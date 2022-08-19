import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, of } from 'rxjs';

@Injectable()
export class NavService {

  selectedMenuItem:string = 'Home';

  getMenuItemAsync(): Observable<string>{
    return of(this.selectedMenuItem)
  }

  setMenuItemAsync(menuItem:string){
    this.selectedMenuItem = menuItem;
  }

  // setMenuItemAsync(menuItem: string):void{
  //   this.selectedMenuItem = new Observable((observer: Observer<string>) => {
  //     observer.next(menuItem)
  //   })
  // }

}
