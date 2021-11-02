import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  public allData: any;

  constructor(private http: HttpClient) {
  }

  getData() {
    return this.http.get('assets/json/book.json').subscribe((data: any) => {
      this.allData = data.content; //Змінна, яка містить список книг
      console.log(this.allData);  //вивести список книг у консоль;
    })
  }
}
