import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import { HomeService } from '../services/home/home.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [HomeService]
})

export class HomeComponent {

}
