import { Component } from '@angular/core';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public userName: any;
  public password: any;

  login(formValues: any) {
    console.log(formValues)
  }
}
