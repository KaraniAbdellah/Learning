import { Component, signal } from '@angular/core';
import { GreeterComponent } from '../../component/greeter/greeter.component';
import { CounterComponent } from '../../component/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreeterComponent, CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  keyUpHandler(event: KeyboardEvent) {
    event.preventDefault();
    console.log(event.type);
  }
  myVar = 'Hello Home Page';
  FromHomeMessage = signal('Hello Greeting Componenets');
}
