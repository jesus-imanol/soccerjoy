import { CommonModule } from '@angular/common';
import { Component,OnInit,DoCheck, } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AssignGameFormComponent } from '../assign-game-form/assign-game-form.component';
import { AsignComponent } from '../asign/asign.component';
import { CardHourComponent } from '../../card-hour/card-hour.component';
import { PlayersComponent } from '../players/players.component';
import { Player, Team,AssociatedTeam } from '../../services/team.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,CommonModule,AssignGameFormComponent,AsignComponent,CardHourComponent,PlayersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit,DoCheck  {
  admin: { name?: string } = {};
  selectedOption: string = 'assignGame'; 
  associatedTeams : AssociatedTeam[] = []
  
  constructor(private router:Router) {
 
  }
  loadAdminData() {
    const adminString = localStorage.getItem('admin');
    if (adminString) {
      this.admin = JSON.parse(adminString);
      console.log(this.admin);
    } else {
      this.router.navigate(['/']);
    }
  }

loadAssociatedTeams() {
 const teamsAsi = localStorage.getItem('associatedTeams');
  if (teamsAsi) {
    this.associatedTeams = JSON.parse(teamsAsi);
   }
  }

  ngOnInit() {
    this.loadAdminData();
    this.loadAssociatedTeams();
  }

  ngDoCheck() {
    this.loadAssociatedTeams();
  }
    selectOption(option: string) {
      this.selectedOption = option;
    }
  
    logout() {
      localStorage.removeItem('admin');
      this.router.navigate(['/']);
    }
  removeTeam(teamToRemove: AssociatedTeam) {
      this.associatedTeams = this.associatedTeams.filter(team => 
        team.team1 !== teamToRemove.team1 && team.team2 !== teamToRemove.team2
      );
      localStorage.setItem('associatedTeams', JSON.stringify(this.associatedTeams));
    }
 finish() {
      localStorage.removeItem('associatedTeams');
      localStorage.removeItem('equipos');
      localStorage.removeItem('admin');
      this.router.navigate(["/"])
  }
}


