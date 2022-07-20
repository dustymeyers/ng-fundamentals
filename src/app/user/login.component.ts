import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public userName: any;
  public password: any;

  constructor (private authService: AuthService, private router: Router) {

  }

  login(formValues: any) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
