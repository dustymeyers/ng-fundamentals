import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";

import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
