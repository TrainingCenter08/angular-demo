import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ProtectRouteGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot): boolean {
      const id = Number(route.paramMap.get('id'));
      if(isNaN(id) || id < 1){
        alert('Invalid product id');
        this.router.navigate(['/products'])
        return false;
      }
    return true;
  }
  
}
