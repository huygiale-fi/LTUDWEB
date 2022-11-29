import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routes } from './dashboard-routing';
import { Router, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from 'src/app/shared/common/sidebar/sidebar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
