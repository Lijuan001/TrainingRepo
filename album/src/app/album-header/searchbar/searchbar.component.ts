import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from '../../shared/modal/signupModel/signup.component';
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';


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

  onKeyup(event) {
    const source = fromEvent(event.target, 'keyup');
    const example = source
    .pipe(
      map(res => res as any),
      debounceTime(200))
    .subscribe(data => console.log('data is: ' + data.target.value));
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
