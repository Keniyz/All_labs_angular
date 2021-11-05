import {Component, DoCheck, Input, NgModule, OnInit, Output} from '@angular/core';
import {FormDataService} from "../form-data.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  //@Input() qwerty =  this.fm.phones;
  constructor(
      public fm: FormDataService
  ) {
  }
}
