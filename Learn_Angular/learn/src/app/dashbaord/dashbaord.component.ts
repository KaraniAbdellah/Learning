import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
@Component({
  selector: 'app-dashbaord',
  imports: [RouterModule],
  templateUrl: './dashbaord.component.html',
  styleUrl: './dashbaord.component.css'
})
export class DashbaordComponent {
  title = "DashBoard"
}

