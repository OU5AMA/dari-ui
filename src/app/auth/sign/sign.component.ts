 import { Component } from '@angular/core';
 import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
  signForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.signForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  onSignup(){

  }


}
