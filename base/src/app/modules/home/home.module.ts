import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@base/app/material.module';

import { HomeRoutingModule } from './home-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home/home.component';
import { SharedModule } from '@base/shared/shared.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
