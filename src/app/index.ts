import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MaterialModule, MdToolbarModule} from '@angular/material'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'


import { AuthModule } from '../auth'
import { FirebaseModule } from '../firebase'
import { TasksModule } from '../tasks'

import { AppComponent } from './components/app'
import { AppHeaderComponent } from './components/app-header'


import 'hammerjs'


@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {useHash: false}),
    AuthModule,
    FirebaseModule,
    BrowserAnimationsModule,
    TasksModule,
    MaterialModule,
    MdToolbarModule
  ]
})

export class AppModule {}
export class PizzaPartyAppModule { }