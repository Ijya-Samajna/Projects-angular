import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '@base/shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
