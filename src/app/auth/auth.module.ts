import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './login/login.component';

const authRoutes: Routes = [
  { path: 'sign', component: SignComponent },{path: 'login', component: LoginComponent}];

@NgModule({
  declarations: [SignComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes), // Use 'forChild' to configure child routes
  ],
})
export class AuthModule {}
