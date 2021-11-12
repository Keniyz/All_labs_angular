import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../http.service";
import {MatDialog} from "@angular/material/dialog";
import {NewDialogComponent} from "../new-dialog/new-dialog.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  newText: string = '';
  newParam: number = 0;
  newTextDirective = '';
  isVisiblecard: boolean = false;


  constructor(
    public httpService: HttpService,
    public dialog: MatDialog,
    public router: Router
  ) {
    //this.loadBook();
  }

  loadBook(): void {      // Натискаємо кнопку
    this.isVisiblecard = !this.isVisiblecard;
    this.httpService.getData()
  }

  removeBook(id: any): void {
    this.httpService.allData.splice(this.httpService.allData.indexOf(id), 1); // видаляємо картку
  }

  chamgeBook(item: any) {
    item.rating++;  // Збільшуємо рейтинг
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewDialogComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  routerToMove(param: any) {
    console.log('param=',param)
    this.router.navigate([param]);
  }
}
