import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  // templateUrl: './home.html',
  // template: './home.html',
  // styleUrl: "./css/style.css",
  template: '<h1>Hello World</h1>',
  styles: [`
    h1 {
      color: red;
    }
    `]
})
export class AppComponent {
  title = 'learn';
}
