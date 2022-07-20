import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";

import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  providers: [

  ]
})
export class UserModule { }
