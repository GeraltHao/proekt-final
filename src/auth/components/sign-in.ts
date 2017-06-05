import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../services/auth-service'


@Component({
  styles: [
    require('./sign-in.scss')
  ],
  template: `
    <div class="g-row sign-in">
      <div class="g-col">
        <h1 class="sign-in__heading">Вход</h1>
        <button class="sign-in__button" (click)="signInWithGoogle()" type="button">
        <img src="common/google.png" width="35" height="35">
        Войти через Google</button>
        <button class="sign-in__button" (click)="signInWithFacebook()" type="button">
        <img src="common/facebook.png" width="35" height="35">
        Войти через Facebook</button>
      </div>
    </div>
  `
})

export class SignInComponent {
  constructor(private auth: AuthService, private router: Router) {}


  signInWithGoogle(): void {
    this.auth.signInWithGoogle()
      .then(() => this.postSignIn())
  }

  signInWithFacebook(): void {
    this.auth.signInWithFacebook()
      .then(() => this.postSignIn())
  }

  private postSignIn(): void {
    this.router.navigate(['/tasks'])
  }
}
