import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todo.service';
import { ModalService } from 'src/app/service/modal.service';

@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.scss']
})
export class DisplayUserComponent implements OnInit {
  todoList: Todo[] = [];
  usersList: User[] = [];
  constructor(private userService: UserService,
              private todoService: TodoService,
              private modalService: ModalService
    ) { }

  ngOnInit() {
    this.userService.fetchUsers()
    .subscribe(res => {
      console.log(res);
      this.usersList = res;
    });
  }

  getTodoList(id) {
    // console.log('getTodoList: ' + id);
    this.todoService.getTodosByUserId(id)
  .subscribe(res => {
    this.todoList = res;
    console.log('getTodoList is: ' + this.todoList);
    this.modalService.openModalById('todo-popup');
  });
  }
}