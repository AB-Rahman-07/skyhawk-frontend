import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },

  // {path: '', pathMatch: 'full', redirectTo:'/events'},
  // {path: 'events', loadChildren: () => import('./pages/home/events/events.module').then(m => m.EventsModule)},

  {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
