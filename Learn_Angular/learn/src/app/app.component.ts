import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // in react we should be install this
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './component/header/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  // templateUrl: './app.component.html',
  // template: './home.html',
  // styleUrl: "./css/style.css",
  template: `
    <app-header />
    <app-home />
  `
})


export class AppComponent {
  title = 'learn';
}
