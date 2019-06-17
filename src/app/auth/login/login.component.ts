import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', {validators: [Validators.required, Validators.email]}),
        password: new FormControl('', {validators: [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]})
      });
  }
  onSubmit() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    console.log(this.loginForm);
  }
}
