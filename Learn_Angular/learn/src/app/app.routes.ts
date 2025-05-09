import { Routes } from '@angular/router';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { TasksComponent } from './tasks/tasks.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // loadComponent: async () => {
    //   const module = await import('./home/home.component');
    //   return module.HomeComponent;
    // },
    component: HomeComponent
  },
  {
    path: 'dashbaord',
    component: DashbaordComponent
  },
  {
    path: 'task',
    component: TasksComponent
  },
  {
    path: 'supplier',
    component: SuppliersComponent
  },
];
