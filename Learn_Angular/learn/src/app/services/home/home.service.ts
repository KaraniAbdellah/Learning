import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // meaning this avaibale in any component
  // if we remove it means this will be available just in home component
})
export class HomeService {
  constructor() {}
}
