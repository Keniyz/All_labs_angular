import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormatPipe} from "./format.pipe";
import {FormsModule} from "@angular/forms";
import {MatTabsModule} from "@angular/material/tabs";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NumbersDirective} from "./app.positivnumber.directive";
import {MatCardModule} from "@angular/material/card";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    AppComponent,
    FormatPipe,
    NumbersDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
