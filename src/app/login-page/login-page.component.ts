import { Component } from '@angular/core';

@Component ({
    selector: 'login-page',
    templateUrl: 'login-page.component.html',
    styleUrls: [
        'login-page.component.scss'
        ]
})

export class LoginPageComponent {
  name: string;
  constructor() {
      this.name = 'Miha';
  }

  myNameIs() {
      console.log(this.name)
  }
}