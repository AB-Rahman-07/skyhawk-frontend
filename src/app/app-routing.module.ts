import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/landingpage' },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },

  // {path: '', pathMatch: 'full', redirectTo:'/events'},
  // {path: 'events', loadChildren: () => import('./pages/home/events/events.module').then(m => m.EventsModule)},
  {
    path: '',
    loadChildren: () =>
      import('./pages/landingpage/landingpage.module').then(
        (m) => m.LandingpageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
