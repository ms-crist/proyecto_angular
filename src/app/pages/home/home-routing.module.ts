import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClimaComponent } from './clima/clima.component';
import { EventoComponent } from './component/evento.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { NewsComponent } from './news/news.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home', component: DashboardComponent
      },
      {
        path: 'usuarios', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'evento', component: EventoComponent
      },
      {
        path: 'clima', component: ClimaComponent
      },
      {
        path: 'news', component: NewsComponent, loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
