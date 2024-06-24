import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full', },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.page').then( m => m.DashboardPage) },
  { path: 'home', loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage), },
  { path: 'login', loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage) },
  { path: 'markup', loadComponent: () => import('./pages/markup/markup.page').then( m => m.MarkupPage) },
  { path: 'comission', loadComponent: () => import('./pages/comission/comission.page').then( m => m.ComissionPage) },
  { path: 'operaciones', loadComponent: () => import('./pages/operaciones/operaciones.page').then( m => m.OperacionesPage) },
  { path: 'convenios', loadComponent: () => import('./pages/convenios/convenios.page').then( m => m.ConveniosPage) },
  { path: 'usuarios', loadComponent: () => import('./pages/usuarios/usuarios.page').then( m => m.UsuariosPage) },
];
