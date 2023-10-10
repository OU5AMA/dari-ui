import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { SignComponent } from './sign/sign.component';



const authRoutes: Routes = [
  {path: 'sign', component: SignComponent},
]

@NgModule({
  declarations: [
    SignComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
