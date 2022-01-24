import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { UserGuard } from './guards/user.guard';
import { PageNotFoundComponent } from './pages/home/page-not-found/page-not-found.component';



const routes: Routes = [
  {
    canActivate: [UserGuard],
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    canActivate: [UserGuard],
    path: 'evento',
    loadChildren: () => import('./pages/home/component/evento.component').then(m => m.EventoComponent)
  },

  {
    canActivate: [LoginGuard],
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    canActivate: [UserGuard],
    path: 'news',
    loadChildren: () => import('./pages/home/news/news.module').then(m => m.NewsModule)
  },
  {
    canActivate: [UserGuard],
    path: 'clima',
    loadChildren: () => import('./pages/home/clima/clima.component').then(m => m.ClimaComponent)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
