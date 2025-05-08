import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: async () => {
      const module = await import('./home/home.component');
      return module.HomeComponent;
    },
  },
  {
    path: 'dashbaord',
    loadComponent: async () => {
        const module = await import("./dashbaord/dashbaord.component");
        return module.DashbaordComponent;
    },
  },
];
