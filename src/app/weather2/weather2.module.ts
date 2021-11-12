import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {Weather2Component} from "./weather2.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

const Weather2module: Routes = [
  {path: '', component: Weather2Component}
]


@NgModule({
  declarations: [
    Weather2Component
  ],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Weather2module),
    MatCardModule,
    MatButtonModule
  ]
})
export class Weather2Module { }
