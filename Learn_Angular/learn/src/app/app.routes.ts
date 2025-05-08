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
  {
    path: 'task',
    loadComponent: async () => {
        const module = await import("./tasks/tasks.component");
        return module.TasksComponent;
    },
  },
  {
    path: 'supplier',
    loadComponent: async () => {
        const module = await import("./suppliers/suppliers.component");
        return module.SuppliersComponent;
    },
  },
];
