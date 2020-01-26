import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-modal',
  templateUrl: './todo-modal.component.html',
  styleUrls: ['./todo-modal.component.scss']
})
export class TodoModalComponent implements OnInit {
@Input() todoList: Todo[] = [];
  constructor() { }

  ngOnInit() {
    console.log('todo-modal:' + this.todoList);
  }

}
