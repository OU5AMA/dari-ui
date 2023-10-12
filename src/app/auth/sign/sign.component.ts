import { Component, Input } from '@angular/core';


interface SignData {
  username: string;
  password: string;
  email: string;
}

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
  @Input() data: SignData;
}
