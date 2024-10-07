import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent {

  myAdmin: FormGroup;

  constructor(private adminService: AdminService, private router: Router) {
    this.myAdmin = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      check: new FormControl(false, Validators.requiredTrue),  
      rol: new FormControl('admin') 
    });
  }

  addAdmin() {
    if (this.myAdmin.valid) {
      if (this.adminService.addAdmin(this.myAdmin.value)) {
        const adminObject = this.adminService.getAdmin();
        const adminString = JSON.stringify(adminObject);
        localStorage.setItem('admin', adminString);
        this.router.navigate(['/dashboard']);
      }
    } else {
      this.myAdmin.markAllAsTouched();  
    }
  }
}
