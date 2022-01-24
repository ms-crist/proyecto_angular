import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ClimaComponent } from './clima/clima.component';
import { NewsComponent } from './news/news.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    ClimaComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
