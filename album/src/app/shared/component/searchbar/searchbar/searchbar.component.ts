import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from '../../../modal/signupModel/signup.component';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  searchForm = {searchField: ''};
  signupForm;
  ngOnInit() {
  }

  onSubmit() {
    this.search.emit(this.searchForm.searchField);
  }

  constructor(private modalService: NgbModal) {}


  open() {
    const modalRef = this.modalService.open(SignupComponent, { scrollable: true } );
    modalRef.componentInstance.signupForm = this.signupForm;
    modalRef.result.then(res => {
      console.log('form: ' + res.fname);
    });
  }

}
