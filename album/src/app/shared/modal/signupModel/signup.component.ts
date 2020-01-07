import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Signup } from '../../model/Signup';
import { checkPassword } from '../../checkPassword.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  closeResult: string;
  isSubmitted = false;
  @Input() signupForm: FormGroup;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder
    ) {}

    ngOnInit() {
      this.signupForm = this.fb.group({
        fname: ['', [Validators.required, Validators.maxLength(10) , Validators.pattern('[a-zA-Z]*')]],
        lname: ['', [Validators.required, Validators.maxLength(10) , Validators.pattern('[a-zA-Z]*')]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
        password: ['', [Validators.required]],
        confirmPassword: ['']
      }, {validator: checkPassword});
    }

    onSubmit() {
      console.log('testing: ' + this.signupForm.get('fname'));
      this.isSubmitted = true;
      if (this.signupForm.valid) {
        this.activeModal.close('sign up close');
      }
    }

    close() {
      this.activeModal.close('Cross click');
    }

    get fname() {
      return this.signupForm.get('fname');
    }

    get lname() {
      return this.signupForm.get('lname');
    }

    get email() {
      return this.signupForm.get('email');
    }

    get phone() {
      return this.signupForm.get('phone');
    }

    get password() {
      return this.signupForm.get('password');
    }

    get confirmPassword() {
      return this.signupForm.get('confirmPassword');
    }

  }
