import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PostService} from "../post.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  public formGroupWeather: FormGroup;
  public weatherData: any;
  public weatherDataList: any;
  public city: any;
  public sunrisedt: any;
  public sunsetdt: any;
  public lat: any;
  public lon: any;
  public wind: any;
  public temp: any;
  public temoeratura: any;



  constructor(public router: Router, private postsService: PostService, public fmBulid: FormBuilder) {

    this.formGroupWeather = this.fmBulid.group({
      temoeratura: ['', Validators.required],
      city: ['', Validators.required],
    })

  }

  ngOnInit(): void {
    //this.postsService.getWeather('London','metric').subscribe(
    this.postsService.getWeather('London,uk', 'metric').subscribe(
      (res: any) => {
        this.weatherData = res.weather;
        this.city = res.name;
        this.sunrisedt = res.sys.sunrise;
        this.sunsetdt = res.sys.sunset;
        this.lat = res.coord.lat;
        this.lon = res.coord.lon;
        this.wind = res.wind.speed;
        this.temp = res.main.temp.toFixed();
        this.temoeratura = '°C';
        console.log(res)
      });

  }

  sendParam() {
    console.log(this.formGroupWeather.getRawValue());
    this.postsService.getWeather(this.formGroupWeather.getRawValue().city, this.formGroupWeather.getRawValue().temoeratura).subscribe(
      (res: any) => {
        console.log(res)
        this.weatherData = res.weather
        this.city = res.name;
        this.sunrisedt = res.sys.sunrise;
        this.sunsetdt = res.sys.sunset;
        this.lat = res.coord.lat;
        this.lon = res.coord.lon;
        this.wind = res.wind.speed;
        this.temp = res.main.temp.toFixed();
        if (this.formGroupWeather.value.temoeratura === 'metric') {
          this.temoeratura = '°C';
        } else {
          this.temoeratura = 'F';
        }
        this.weatherDataList ='';

      });
  }

  sendParam5day() {
    console.log(this.formGroupWeather.getRawValue());
    this.postsService.getWeather5day(this.formGroupWeather.getRawValue().city, this.formGroupWeather.getRawValue().temoeratura).subscribe(
      (res: any) => {
        console.log(res.list);
        this.weatherDataList =res.list;
        this.city = res.city.name;
        this.sunrisedt = res.city.sunrise;
        this.sunsetdt = res.city.sunset;
        this.lat = res.city.coord.lat;
        this.lon = res.city.coord.lon;
        if (this.formGroupWeather.value.temoeratura === 'metric') {
          this.temoeratura = '°C';
        } else {
          this.temoeratura = 'F';
        }
        this.weatherData='';
      });
  }

  // sendParamHistory() {
  //   this.postsService.getWeatherHistory('50.4333','30.5167','1636566066').subscribe(
  //     (res: any) => {
  //      console.log(res);
  //      /* this.weatherDataList =res.list;
  //       this.city = res.city.name;
  //       this.sunrisedt = res.city.sunrise;
  //       this.sunsetdt = res.city.sunset;
  //       this.lat = res.city.coord.lat;
  //       this.lon = res.city.coord.lon;
  //       if (this.formGroupWeather.value.temoeratura === 'metric') {
  //         this.temoeratura = '°C';
  //       } else {
  //         this.temoeratura = 'F';
  //       }*/
  //       //this.weatherData='';
  //    });
  //
  // }
  routerToMove(param: any) {
    this.router.navigate([param]);
  }
}
