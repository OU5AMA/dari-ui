import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './sign/sign.component';

const authRoutes: Routes = [{ path: 'sign', component: SignComponent }];

@NgModule({
  declarations: [SignComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes), // Use 'forChild' to configure child routes
  ],
})
export class AuthModule {}
