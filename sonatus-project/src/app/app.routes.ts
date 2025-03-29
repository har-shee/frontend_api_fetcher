import { Route, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';


export const routes: Route[] = [
    { path: '', component: UserListComponent },
    { path: ':id', loadComponent: () => import('../app/components/user-detail/user-detail.component').then(m => m.UserDetailComponent) },
  ];
