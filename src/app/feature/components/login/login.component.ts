import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  signInForm:FormGroup;
  formSubmitted:boolean = false;

  constructor(private formBuilder:FormBuilder, private _router:Router){

    this.signInForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required]]
    })

  }


  submitForm(){
    this.formSubmitted = true;

    if(this.signInForm.valid){

      localStorage.setItem("loggedin","true");

      this._router.navigate(['dashboard'])
      // 
    }

    console.log(this.signInForm.errors);
  }

}
