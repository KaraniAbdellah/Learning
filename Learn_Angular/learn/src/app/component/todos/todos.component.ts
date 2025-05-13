import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos/todos.service';
import { todos } from '../../models/todos.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  providers: [TodosService],
})
export class TodosComponent implements OnInit {
  constructor() {}

  todoService = inject(TodosService);
  todos_array = signal<Array<todos>>([]);

  ngOnInit(): void {
    let data: Array<todos> = [];
    this.todoService
      .getTodo()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todos_array.set(todos);
        data = todos;
        console.log(todos);
      });
  }
}
