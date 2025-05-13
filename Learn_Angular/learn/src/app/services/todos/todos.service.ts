import { Injectable } from '@angular/core';
import { todos } from '../../models/todos.type';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos: Array<todos> = [
    {
      title: 'Learn Angular Services',
      userId: 10,
      completed: false,
      id: 1,
    },
    {
      title: 'Learn Angular Services',
      userId: 10,
      completed: false,
      id: 1,
    },
    {
      title: 'Learn Angular Services',
      userId: 10,
      completed: false,
      id: 1,
    },
    {
      title: 'Learn Angular Services',
      userId: 10,
      completed: false,
      id: 1,
    },
  ];
  constructor() { }
}
