import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HolaMonComponent } from './hola-mon/hola-mon.component';
import { HelloWorld } from './firstcomponent/first.component';
import { UserComponent } from './user/user.component';

import { DataForoService } from './data-foro.service'
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Route } from '@angular/router';


const routes: Route[] = [
  { path: '', component: HolaMonComponent },
  { path: 'about', component: HelloWorld }
];

@NgModule({
  declarations: [
    AppComponent,
    HolaMonComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataForoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
