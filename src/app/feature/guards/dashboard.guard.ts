import { Injectable } from '@angular/core';
import { CanActivateFn,CanActivate, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class DashboardGuard implements CanActivate{

  constructor(private _router:Router){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if(localStorage.getItem("loggedin")){
      return true;
    }
    else{
      this._router.navigate(['login'])
      return false;
    }

  }  
}


// export const dashboardGuard: CanActivateFn = (route, state) => {
//   return true;
// };
