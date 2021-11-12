import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public httpOptions  = {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': 'a90e140340mshef94636ba9a797dp1cca17jsn02f09de2d599'
    })
  };

  public params: string ='';

  public url: string = 'https://community-open-weather-map.p.rapidapi.com/weather?';
  public url2: string = 'https://community-open-weather-map.p.rapidapi.com/forecast?';
  public url3: string = 'https://community-open-weather-map.p.rapidapi.com/onecall/timemachine?';

  constructor(private http: HttpClient) {
  }

  getWeather(cсity:string, uunits:string): any {
    this.params =
      '&q='+cсity+
      '&lang=ua' +
      '&units='+uunits;
    return this.http.get(this.url + this.params, this.httpOptions);
  }

  getWeather5day(cсity:string, uunits:string): any {
    this.params =
      '&q='+cсity+
      '&lang=ua' +
      '&units='+uunits;
    return this.http.get(this.url2 + this.params, this.httpOptions);
  }
  getWeatherHistory(lat:string, lon:string, dt: string): any {
    this.params =
      '&lat='+lat+
      '&lon='+lon+
      '&lang=ua' +
      '&dt='+dt+
      '&units=metric';
    return this.http.get(this.url3 + this.params, this.httpOptions);
  }
}
