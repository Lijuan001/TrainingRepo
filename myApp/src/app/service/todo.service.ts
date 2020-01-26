import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { Todo } from '../model/todo';

const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  getTodosByUserId(id): Observable<Todo[]> {
    const todosurl =  `${baseUrl}/todos?userId=${id}`;
    return this.httpClient.get<Todo[]>(todosurl);
  }
}



