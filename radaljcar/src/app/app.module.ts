import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutomobiliComponent } from './automobili/automobili.component';
import { TablaComponent } from './tabla/tabla.component';
import { IzvestajComponent } from './izvestaj/izvestaj.component';
import { DodavanjeAutomobilaComponent } from './dodavanje-automobila/dodavanje-automobila.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AutomobiliComponent,
    TablaComponent,
    IzvestajComponent,
    DodavanjeAutomobilaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
