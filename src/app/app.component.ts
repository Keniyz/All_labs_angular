import {Component} from '@angular/core';
import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newText: string = '';
  newParam: number = 0;
  newTextDirective = '';

  constructor(public httpService: HttpService) {
    this.loadBook();
  }

  loadBook(): void {      // Натискаємо кнопку
    this.httpService.getData()
  }

  removeBook(id: any): void {
    this.httpService.allData.splice(this.httpService.allData.indexOf(id), 1); // видаляємо картку
  }

  addNewReply() {
    let card = {
      dateBook: '2019-08-30T10:26:14.000Z',
      about: 'Розповіді',
      cost: '550',
      rating: 2,
      name: 'Мері Попінс',
      id: 5,
      type: 'IMPORTANT'
    };
    this.httpService.allData.push(card); // Пушим картку в масив
  }
  chamgeBook(item:any){
    item.rating++;  // Збільшуємо рейтинг
  }

}
