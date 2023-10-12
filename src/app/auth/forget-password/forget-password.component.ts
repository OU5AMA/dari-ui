import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgetPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', Validators.required]
    })
  }

  onForgetPassword(){
    console.log("you forgot your password")
  }
}
