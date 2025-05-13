import { Component } from '@angular/core';
import { TodosComponent } from './component/todos/todos.component';


@Component({
  selector: 'app-root',
  imports: [TodosComponent],
  templateUrl: "./app.component.html",
})


export class AppComponent {
  title = 'learn';
}

