import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import {SelectModule} from "ng2-select";
import { LandingPageComponent } from './landing-page/landing-page.component';
import {AgGridModule} from "ag-grid-angular/main";
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';

import { HttpModule } from '@angular/http'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { DefaultComponent } from './default/default.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AddCollateralComponent } from './add-collateral/add-collateral.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MenuComponent,
    DefaultComponent,
    AddCollateralComponent,
    TransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SelectModule,
    BrowserAnimationsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    BsDropdownModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  providers: [MenuComponent, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
