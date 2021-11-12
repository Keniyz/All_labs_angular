import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-weather-about',
  templateUrl: './weather-about.component.html',
  styleUrls: ['./weather-about.component.css']
})
export class WeatherAboutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  routerToMove(param: any) {
      this.router.navigate([param]);
  }
}
