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
        <button class="sign-in__button" (click)="signInAnonymously()" type="button">Войти анонимно</button>
        <button class="sign-in__button" (click)="signInWithGoogle()" type="button">Войти через Google</button>
        <button class="sign-in__button" (click)="signInWithFacebook()" type="button">Войти через Facebook</button>
      </div>
    </div>
  `
})

export class SignInComponent {
  constructor(private auth: AuthService, private router: Router) {}

  signInAnonymously(): void {
    this.auth.signInAnonymously()
      .then(() => this.postSignIn())
  }

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
