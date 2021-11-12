import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherComponent} from "./weather.component";
import {RouterModule, Routes} from "@angular/router";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

const weatherModule: Routes = [
  {path: '', component: WeatherComponent}
]

@NgModule({
  declarations: [
    WeatherComponent
  ],
  exports: [
RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(weatherModule),
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class WeatherModule { }

