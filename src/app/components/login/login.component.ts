import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin:FormGroup;
  constructor(){
    this.isLogin= new FormGroup ({
      email: new FormControl('',Validators.email),
      password: new FormControl('',Validators.email)
    })
  }
  getAdmin() {
    localStorage.getItem('admin')
  }
}
