import { Component, Input } from '@angular/core';

interface ForgetPasswordData{
  email: string;
}

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  @Input() data: ForgetPasswordData;
}
