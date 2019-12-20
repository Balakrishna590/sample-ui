/* --- Angular Imports --- */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ApiService } from './common/api-service/api.service';
import { AdminEmployeeService } from './services/admin-employee/admin-employee.service';
import { StorageService } from './common/storage-service/storage.service';
import { LoaderService } from './common/loader-service/loader.service';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    AdminEmployeeService,
    StorageService,
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
