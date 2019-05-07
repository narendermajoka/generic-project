import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule { }
