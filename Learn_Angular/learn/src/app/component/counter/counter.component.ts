import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter = signal(0);
  dec() {
    this.counter.update((value) => --value);
    // this.counter.set(this.counter() - 1);
  }
  incr() {
    // this.counter.set(this.counter() + 1);
    this.counter.update((value) => value + 1);
  }
  reset() {
    this.counter.set(0);
  }
}
