import {Component} from '@angular/core';
import {HttpService} from "./http.service";
import {MatDialog} from "@angular/material/dialog";
import {NewDialogComponent} from "./new-dialog/new-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newText: string = '';
  newParam: number = 0;
  newTextDirective = '';
  isVisiblecard:boolean=false;

  constructor(public httpService: HttpService, public dialog: MatDialog) {
    //this.loadBook();
  }

  loadBook(): void {      // Натискаємо кнопку
    this.isVisiblecard = !this.isVisiblecard;
    this.httpService.getData()
  }

  removeBook(id: any): void {
    this.httpService.allData.splice(this.httpService.allData.indexOf(id), 1); // видаляємо картку
  }

  chamgeBook(item:any){
    item.rating++;  // Збільшуємо рейтинг
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
