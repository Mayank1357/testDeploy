import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { UsercrudComponent } from './usercrud/usercrud.component';
import { AuthGaurd } from './auth.gaurd';
const routes: Routes = [
  { path: 'dashboard' , component:DashboardComponent,canActivate:[AuthGaurd]},
  { path: '',component:LoginPageComponent},
  { path: 'usercrud',component:UsercrudComponent},
  { path: 'forgotpassword',component:ForgotpasswordComponent},
  { path: 'logout',component:LogoutComponent},
  { path: 'register',component:RegisterComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,LoginPageComponent,UsercrudComponent]