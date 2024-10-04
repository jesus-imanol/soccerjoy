import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
    
}
