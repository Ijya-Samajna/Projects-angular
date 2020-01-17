import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@base/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader/loader.component';
import { MyformComponent } from './myform/myform.component';


@NgModule({
  declarations: [
    LoaderComponent,
    MyformComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
      ],
  exports: [
    LoaderComponent,
  ]
})
export class SharedModule { }
