import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-weather-error',
  templateUrl: './weather-error.component.html',
  styleUrls: ['./weather-error.component.css']
})
export class WeatherErrorComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  routerToMove(param: any) {
    this.router.navigate([param]);
  }

}
