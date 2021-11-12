import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WeatherErrorComponent} from "./weather-error/weather-error.component";


const routes: Routes = [
  {
    path: 'weather',
    loadChildren: () => import ('./weather/weather.module').then(m => m.WeatherModule)
  },
  {
    path: 'history-Weather',
    loadChildren: () => import ('./weather2/weather2.module').then(m => m.Weather2Module)
  },
  {
    path: 'weather_about',
    loadChildren: () => import ('./weather-about/weather-about.module').then(m => m.WeatherAboutModule)
  },
  {
    path: '',
    loadChildren: () => import ('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '**',
    component: WeatherErrorComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
