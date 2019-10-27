import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule} from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];  

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // FormsModule,
   // HttpClient,
   // HttpModule,
   // HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
