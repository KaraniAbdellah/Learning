import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos/todos.service';
import { todos } from '../../models/todos.type';

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
    console.log(this.todoService.todos);
    this.todos_array.set(this.todoService.todos);
  }
}
