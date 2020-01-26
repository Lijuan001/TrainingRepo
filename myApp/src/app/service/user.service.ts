import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { map } from 'rxjs/operators';
import { Todo } from '../model/todo';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // get user info from api
  fetchUsers(): Observable<User[]> {
    return this.httpClient.get(`${baseUrl}/users`)
    .pipe(
      map(res => res as User[])
    );
  }

  // fetch todo list from api
  fetchTodoList(id): Observable<Todo[]> {
    return this.httpClient.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
    .pipe(
      map(res => res as Todo[])
    );
  }
}
