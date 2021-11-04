import {Component, DoCheck, NgModule, OnInit} from '@angular/core';
import {DFormComponent} from "../driven_form/d-form/d-form.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

  constructor(
    public fm: DFormComponent
  ) {
  }

}
