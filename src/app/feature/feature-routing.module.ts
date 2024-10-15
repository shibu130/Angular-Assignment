import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardGuard } from './guards/dashboard.guard';

const routes: Routes = [
 {path:"", component:WelcomeComponent},
 {path:"login", component:LoginComponent},
 {path:"dashboard", component:DashboardComponent, canActivate:[DashboardGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[DashboardGuard]
})
export class FeatureRoutingModule { }
