import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatFormFieldModule} from "@angular/material/form-field";
import {HttpService} from "../http.service";

export interface DialogData {
  name: string;
  cost: string;
  type:string;
  dtbook: any;
  rank:string;
}

@Component({
  selector: 'app-new-dialog',
  templateUrl: './new-dialog.component.html',
  styleUrls: ['./new-dialog.component.css']
})
export class NewDialogComponent implements OnInit {
  public name: string = '';
  public cost:string = '';
  public type:string = '';
  public dtbook:any= '';
  public rank:string = '';


  constructor(public dialog: MatDialog, public httpService: HttpService) {}
  ngOnInit() {
  }
  crtCard(){
    let newcard= {
      dateBook: this.dtbook,
      about: 'Нове',
      cost: this.cost,
      rating: this.rank,
      name: this.name,
      id: 100,
      type: this.type
    };
    this.httpService.allData.push(newcard); // Пушим картку в масив
  }

}

