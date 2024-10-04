import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AssignGameFormComponent } from '../assign-game-form/assign-game-form.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,CommonModule,AssignGameFormComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {
  admin: { name?: string } = {};
  selectedOption: string = 'newTeam'; 
  constructor(private router:Router) {

  }
  ngOnInit() {
    const adminString = localStorage.getItem('admin');
    if (adminString) {
      this.admin = JSON.parse(adminString);
      console.log(this.admin);
    } else {
      this.router.navigate(["/"])
    }
    console.log("Soy "+localStorage.getItem('admin'));
  }
    selectOption(option: string) {
      this.selectedOption = option;
    }
  
    logout() {
      localStorage.removeItem('admin');
      this.router.navigate(['/']);
    }
}
