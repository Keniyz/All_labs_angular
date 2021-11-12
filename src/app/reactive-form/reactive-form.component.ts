import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormDataService} from "../form-data.service";
import {minLen} from "./validator";


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent{
  public formGroup: FormGroup;
  public resultt: string='';

  companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
  color: string[] = ["Білий", "Чорний", "Червоний", "Синій", "Жовтий"];

  constructor(public fmBulid: FormBuilder, public fmdtsr: FormDataService ) {

    this.formGroup=this.fmBulid.group({
      brand: ['',Validators.required],
      model: ['',Validators.required],
      seria: ['',[Validators.required,Validators.minLength(3)]],
      color: ['',Validators.required],
      fabula: ['',[Validators.required, minLen]],
      result: ['']
    })
  }

  showAction(){
      this.resultt='Done';
      this.fmdtsr.sForm(this.formGroup)
  }

}
