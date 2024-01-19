import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutroCompComponent } from './outro-comp/outro-comp.component';
import { TagsComponent } from './tags/tags.component';
import { TituloComponent } from './titulo/titulo.component';


@NgModule({
  declarations: [
    AppComponent,
    OutroCompComponent,
    TagsComponent,
    TituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
