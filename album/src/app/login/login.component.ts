import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required, Validators.maxLength(10)],
      password: ['', Validators.required]
    });
  }


  get name() { return this.loginForm.get('name'); }

  get password() { return this.loginForm.get('password'); }

  login() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    /* if (this.loginForm.invalid) {
      return;
    } */
  }

}
