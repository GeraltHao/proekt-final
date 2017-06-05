import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'

import { AuthModule } from '../auth'
import { FirebaseModule } from '../firebase'
import { TasksModule } from '../tasks'

import { AppComponent } from './components/app'
import { AppHeaderComponent } from './components/app-header'
import {MaterialModule} from '@angular/material'


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
    TasksModule,
    MaterialModule
  ]
})

export class AppModule {}
