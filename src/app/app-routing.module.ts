import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { UsercrudComponent } from './usercrud/usercrud.component';
import { AuthGaurd } from './auth.gaurd';
import { RolemanagementComponent } from './rolemanagement/rolemanagement.component';

import { RetdetComponent } from './retdet/retdet.component';
import { MainreportpageComponent } from './allreportsdata/mainreportpage/mainreportpage.component';
import { UsersdataComponent } from './usersdata/usersdata.component';
import { RetpageComponent } from './retpage/retpage.component';
import { UserspageComponent } from './userspage/userspage.component';


const routes: Routes = [
  { path: 'dashboard' , component:DashboardComponent,canActivate:[AuthGaurd]},
  { path: '',component:LoginPageComponent},
  { path: 'userdata',component:UsersdataComponent},
  { path: 'logout',component:LogoutComponent},
  { path: 'register',component:RegisterComponent},  
  { path: 'retdet',component:RetdetComponent},


  { path: 'reports',component:MainreportpageComponent,canActivate:[AuthGaurd]},
  { path: 'usercrud',component:UsercrudComponent,canActivate:[AuthGaurd]},  
  { path: 'retpage',component:RetpageComponent,canActivate:[AuthGaurd]},
  { path: 'userpage',component:UserspageComponent,canActivate:[AuthGaurd]},
  
  
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,LoginPageComponent,UsercrudComponent]