import { Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewPlayerComponent } from './components/view-player/view-player.component';
export const routes: Routes = [
    {path: "", component: RegisterComponent},
    {path:'login',component: LoginComponentComponent},
    {path:"dashboard",component: DashboardComponent},
    {path:"player",component: ViewPlayerComponent},
];
