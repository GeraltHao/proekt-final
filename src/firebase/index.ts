import { NgModule } from '@angular/core'
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database'


const firebaseConfig = {
  apiKey: 'AIzaSyDVQ-j0Y14eKtt4Y1gmBhk8Sn67ijWzNGQ',
  authDomain: 'proekt-final.firebaseapp.com',
  databaseURL: 'https://proekt-final.firebaseio.com',
  storageBucket: 'proekt-final.appspot.com'
}


@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig, 'ng2-todo-app')
  ]
})
export class FirebaseModule {}
