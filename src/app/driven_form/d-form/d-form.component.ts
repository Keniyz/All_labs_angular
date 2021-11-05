import {Component, DoCheck, Injectable, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {FormDataService} from "../../form-data.service";

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

  constructor(public fmdtsrv: FormDataService ){ }


   sendForm(form: NgForm) {
    if (this.forms.comp || this.forms.model || this.forms.seria ||  this.forms.color || this.forms.fabula) {
      this.fmdtsrv.sForm(form)
    }



   // this.phones.push(this.forms);
   /* console.log(form.value);
    this.phones=this.phones.push(form.value);
    console.log('1111', this.phones);*/

  }

}
