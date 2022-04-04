import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {OktaAuthGuard, OktaCallbackComponent} from "@okta/okta-angular";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [OktaAuthGuard] },

  {
    path: 'login/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'protected',
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
    canActivate: [OktaAuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
