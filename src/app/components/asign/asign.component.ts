import { Component, OnInit } from '@angular/core';
import { TeamService, Team, Player,AsocciatedTeams } from '../../services/team.service'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-asign',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './asign.component.html',
  styleUrls: ['./asign.component.css']
})
export class AsignComponent implements OnInit {
  teams: Team[] = []; 
  selectedTeam1: string = ''; 
  selectedTeam2: string = ''; 
  associatedTeams: AsocciatedTeams[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teams = this.teamService.getTeams();
    this.loadAssociatedTeamsFromLocalStorage();  
  }

  assignOpponents(hour: string) {
    if(hour== "" || hour == '' ){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "NO HOUR, TRY AGAIN!",
      });
    }
    else{
    if (this.selectedTeam1 && this.selectedTeam2 && this.selectedTeam1 !== this.selectedTeam2) {
      let newAssociation: AsocciatedTeams = {
        team1: this.selectedTeam1,
        team2: this.selectedTeam2,
        hour: hour
      };
      this.associatedTeams.push(newAssociation);
      this.saveAssociatedTeamsToLocalStorage();
      Swal.fire({
        title: "Good job!",
        text: "TEAM ASIGNED SUCCESS",
        icon: "success"
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }
  }

  saveAssociatedTeamsToLocalStorage() {
    localStorage.setItem('associatedTeams', JSON.stringify(this.associatedTeams));
  }

  loadAssociatedTeamsFromLocalStorage() {
    const storedTeams = localStorage.getItem('associatedTeams');
    if (storedTeams) {
      this.associatedTeams = JSON.parse(storedTeams); 
    }
  }
}


