import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router'; // in react we should be install this


@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet],
  templateUrl: "./app.component.html",
})


export class AppComponent {
  title = 'learn';
}
