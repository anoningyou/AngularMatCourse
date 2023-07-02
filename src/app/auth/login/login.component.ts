import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoading = false;

  constructor(private router: Router){

  }

  onLogin() {

    this.isLoading = true;
    setTimeout(() => {
        this.router.navigate(["/"])
    },2000)
  }
}
