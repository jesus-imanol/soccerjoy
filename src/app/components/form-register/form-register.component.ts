import { Component } from '@angular/core';
import {  ReactiveFormsModule,FormGroup,FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {

  myAdmin: FormGroup;
  constructor(private adminService : AdminService,private router: Router){
    this.myAdmin = new FormGroup({
      name : new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
      lastname : new FormControl('',Validators.required),
      email:  new FormControl('',Validators.email),
      password: new FormControl('',Validators.minLength(8)),
      rol: new FormControl('admin')
    });
   }

   addAdmin() {
   if(this.adminService.addAdmin(this.myAdmin.value)){
    const adminObject = this.adminService.getAdmin();
    const adminString = JSON.stringify(adminObject);
    localStorage.setItem('admin', adminString);
    this.router.navigate(['/dashboard'])
   }
}

   
}