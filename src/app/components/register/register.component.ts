import { Component } from '@angular/core';
import { FormRegisterComponent } from '../form-register/form-register.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormRegisterComponent,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
