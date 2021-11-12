import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PostService} from "../post.service";

@Component({
  selector: 'app-weather2',
  templateUrl: './weather2.component.html',
  styleUrls: ['./weather2.component.css']
})
export class Weather2Component implements OnInit {
  public weatherDataHistory: any;
  public city: any;
  public sunrisedt: any;
  public sunsetdt: any;
  public temp: any;


  constructor(public router: Router, private postsService: PostService) { console.log('222222')}

  ngOnInit(): void {
    this.postsService.getWeatherHistory('50.4333','30.5167','1636566066').subscribe(
      (res: any) => {
        this.weatherDataHistory = res.hourly;
        this.city = res.timezone;
        this.sunrisedt = res.current.sunrise;
        this.sunsetdt= res.current.sunset;
        this.temp = res.current.temp.toFixed();


        /*
        this.lat = res.coord.lat;
        this.lon = res.coord.lon;
        this.wind = res.wind.speed;

        this.temoeratura = '°C';*/
        console.log(res)
      });
  }
  routerToMove(param: any) {
    this.router.navigate([param]);
  }

}
