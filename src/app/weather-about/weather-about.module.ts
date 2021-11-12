import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {WeatherAboutComponent} from "./weather-about.component";

const Weatheraboutmodule: Routes = [
  {path: '', component: WeatherAboutComponent}
]

@NgModule({
  declarations: [
    WeatherAboutComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Weatheraboutmodule)
  ]
})
export class WeatherAboutModule { }
