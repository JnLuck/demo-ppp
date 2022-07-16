import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavComponent } from './components/nav/nav.component';



import { NavModule } from './components/nav/nav.module';
import { LoginComponent } from './components/login/login.component';
import { LoginModule } from './components/login/login.module';
//import { LoginModule } from './components/login/login.module';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavModule,
    AppRoutingModule,
    LoginModule
 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
