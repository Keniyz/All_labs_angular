import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatTreeModule} from "@angular/material/tree";
import {MatTabsModule} from "@angular/material/tabs";
import {FormatPipe} from "../format.pipe";
import {NumbersDirective} from "../app.positivnumber.directive";
import {NewDialogComponent} from "../new-dialog/new-dialog.component";
import {DFormComponent} from "../driven_form/d-form/d-form.component";
import {CardComponent} from "../card/card.component";
import {ReactiveFormComponent} from "../reactive-form/reactive-form.component";

const dashboardModule: Routes = [
  {path: '', component: DashboardComponent}
]

@NgModule({
  declarations: [
    DashboardComponent,
    FormatPipe,
    NumbersDirective,
    NewDialogComponent,
    DFormComponent,
    CardComponent,
    ReactiveFormComponent
  ],
  exports: [
    RouterModule
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTreeModule,
    FormsModule,
    MatTabsModule,
    CommonModule,
    RouterModule.forChild(dashboardModule)
  ]
})
export class DashboardModule {
}

