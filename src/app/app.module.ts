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
import { UserdeleteComponent } from './Actions/userdelete/userdelete.component';
import { UserminusinsideComponent } from './Actions/userminusinside/userminusinside.component';
import { UsersdataComponent } from './usersdata/usersdata.component';
import { UserupdateComponent } from './Actions/userupdate/userupdate.component';
import { UserupdateinsideComponent } from './Actions/userupdateinside/userupdateinside.component';
import { MainreportpageComponent } from './allreportsdata/mainreportpage/mainreportpage.component';
import { MroComponent } from './allreportsdata/mro/mro.component';
import { CmoComponent } from './allreportsdata/cmo/cmo.component';
import { TcoComponent } from './allreportsdata/tco/tco.component';
import { RetpageComponent } from './retpage/retpage.component';
import { UserspageComponent } from './userspage/userspage.component';




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
     UserdeleteComponent,
     UserminusinsideComponent,
     UsersdataComponent,
     UserupdateComponent,
     UserupdateinsideComponent,
     MainreportpageComponent,
     MroComponent,
     CmoComponent,
     TcoComponent,
     RetpageComponent,
     UserspageComponent,
     
    


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
