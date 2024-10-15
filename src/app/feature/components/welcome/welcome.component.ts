import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit{

  // constructor and dependency injection
  // will considering using firebase auth
  constructor(private _router:Router){




  }

  ngOnInit(): void {

    if(this.checkIfLoggedIn()){

      // navigate

    }

  }


  login(): void{

    if(!this.checkIfLoggedIn()){

      // navigate
      this._router.navigate(["login"]);

    }
    else{
      // login to dashboard
      // authenticated already
      this._router.navigate(["dashboard"])
    }

  }


  checkIfLoggedIn(){

    let tokenObject  = localStorage.getItem('loggedin') 

    if(tokenObject == null || tokenObject == undefined){
      return false;
    }
    else{
      return true;
    }

  }
  



}
