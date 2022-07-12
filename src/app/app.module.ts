import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConveniosModule } from './components/convenios/convenios.module';
import { LoginRoutingModule } from './components/login/login-routing.module';
import { LoginModule } from './components/login/login.module';
import { SolicitudModule } from './components/solicitud/solicitud.module';
import { PracticaModule } from './components/practica/practica.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    ConveniosModule,
    SolicitudModule,
    PracticaModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
