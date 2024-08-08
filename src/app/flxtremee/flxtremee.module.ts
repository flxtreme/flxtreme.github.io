import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlxtremeeComponent } from './flxtremee.component';
import { HomeComponent } from './home/home.component';
import { FlxtremeeRoutingModule } from './flxtremee-routing-module';
import { ComponentsModule } from "../shared/components/components.module";



@NgModule({
  declarations: [
    FlxtremeeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FlxtremeeRoutingModule,
    ComponentsModule
],
  exports: []
})
export class FlxtremeeModule { }
