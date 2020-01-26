import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const api = environment.baseUrl;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit() {
    /* this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', Validators.required, Validators.minLength(4)]


    }); */

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required])
    });


  }

  registerUser() {
    console.log('registerUser');
    return this.httpClient.post( `${api}/register`, this.loginForm.value,
    {
      headers: {'Content-Type': 'application/json'}
    });
  }

  checkIfPasswordIsEQUAL() {
    console.log('check password equal');
    // this.passwordsIsEqual = this.loginForm.value.password === this.registerForm.value.repeatPassword;
  }

  loginin() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.invalid);
    return this.httpClient.post(`${api}/login`, this.loginForm.value
      , {  headers: {'Content-Type': 'application/json'}});
  }



}
