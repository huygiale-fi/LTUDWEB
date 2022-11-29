import {  Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

export const routes:Routes=[
    {
        path: '',
        component: DashboardComponent,
        // children: [
        //   {
        //     path: '',
        //     pathMatch: 'full',
        //     canActivate: [],
        //     data: { roles: [] }, // If path is blank then use role guard to redirect to default instead
        //   },
        // //   ...ConstHelper.MENUS.map((x) => ({
        // //     path: x.path,
        // //     loadChildren: x.loadChildren,
        // //     canActivate: x.canActivate,
        // //     data: x.data,
        // //     // pathMatch: x.pathMatch,
        // //     // canActivate: x.allowEmployee ? null : [EmployeeGuard],
        // //   })),
        // //   {
        // //     path: 'profile',
        // //     loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
        // //   },
        // ],
      },
]