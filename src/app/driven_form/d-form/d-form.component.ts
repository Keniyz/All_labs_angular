import {Component, DoCheck, Injectable, Input, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-d-form',
  templateUrl: './d-form.component.html',
  styleUrls: ['./d-form.component.css']
})

export class DFormComponent {
  public forms: any = {};
  public phones: any=[];


  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
  color: string[] = ["Білий", "Чорний", "Червоний", "Синій", "Жовтий"];

  constructor( ){ }

  sendForm(form: NgForm) {
   // this.phones.push(this.forms);
    console.log(form.value);
    this.phones.push(form.value);
    console.log('1111', this.phones);
  }

}
