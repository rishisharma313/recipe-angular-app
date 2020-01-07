import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;

  onSwitchMode(){
      this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form:NgForm){
    const value = form.value;
    console.log(value);
    form.reset();
  }
  constructor() { }

  ngOnInit() {
  }

}
