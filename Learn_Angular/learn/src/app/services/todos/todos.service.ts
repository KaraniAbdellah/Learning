import { inject, Injectable } from '@angular/core';
import { todos } from '../../models/todos.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodosService {
  // Making HTTP Calls
  http = inject(HttpClient); // used make http request
  constructor() { }

  getTodo() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<todos>>(url);
  }
}
