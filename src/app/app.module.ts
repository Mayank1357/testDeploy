import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LogoutComponent } from './logout/logout.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGaurd } from './auth.gaurd';
import { RolemanagementComponent } from './rolemanagement/rolemanagement.component';



import { MaterialExampleModule } from './material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { RetdetComponent } from './retdet/retdet.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UsercreateComponent } from './Actions/usercreate/usercreate.component';
import { DialogExampleComponent } from './Actions/dialog-example/dialog-example.component';




@NgModule({
  declarations: [
    
    AppComponent,
    

    routingComponents,
    ForgotpasswordComponent,
    LogoutComponent,
    RegisterComponent,
    RolemanagementComponent,

    RetdetComponent,
     UsercreateComponent,
     DialogExampleComponent,
     
    


  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatNativeDateModule,
    MaterialExampleModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
