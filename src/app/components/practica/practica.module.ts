import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticaRoutingModule } from './practica-routing.module';
import { PracticaComponent } from './practica.component';


@NgModule({
  declarations: [
    PracticaComponent
  ],
  imports: [
    CommonModule,
    PracticaRoutingModule
  ]
})
export class PracticaModule { }
