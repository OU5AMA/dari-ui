import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

const authRoutes: Routes = [
  { path: 'sign', component: SignComponent },
  { path: 'login', component: LoginComponent },
  {path: 'forgot-password', component: ForgetPasswordComponent}
];

@NgModule({
  declarations: [SignComponent, LoginComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes), // Use 'forChild' to configure child routes
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
