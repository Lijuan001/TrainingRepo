import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/service/modal.service';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/model/todo';
import { User } from 'src/app/model/user';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() userInfo: User;
  @Output() userId = new EventEmitter<number>();
  constructor( ) { }

ngOnInit() {
//  this.modalService.hiddenModal('todo-popup');
}

openTodoPopup(id) {
  this.userId.emit(id);
  // console.log('open todo popup ' + this.userId);
  }

  testInteractionByVariable(){
    window.alert("for testing interact between parent componet and child");
  }

}
