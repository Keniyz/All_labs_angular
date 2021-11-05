import {Injectable, Input} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DFormComponent} from "./driven_form/d-form/d-form.component";

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }
  public forms: any = {};
  public phones: any=[];
  public allData: any=[];

  sForm(forms:any) {
    // this.phones.push(this.forms);
    console.log(forms.value);
    this.allData = forms.value;
    this.phones.push(forms.value);

  }


}
