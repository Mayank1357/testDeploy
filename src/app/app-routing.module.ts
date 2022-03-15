import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UsercrudComponent } from './usercrud/usercrud.component';

const routes: Routes = [
  { path: 'dashboard' , component:DashboardComponent},
  { path: '',component:LoginPageComponent},
  { path: 'usercrud',component:UsercrudComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,LoginPageComponent,UsercrudComponent]