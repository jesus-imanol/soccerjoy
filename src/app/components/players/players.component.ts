import { Component, OnInit } from '@angular/core';
import { CardPlayerComponent } from '../card-player/card-player.component';
import { Player, Team } from '../../services/team.service';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { TeamService } from '../../services/team.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CardPlayerComponent, FormsModule,CommonModule],
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  teams: Team[] = [];
  selectedTeamName: string = '';
  selectedTeam: Team | null = null;

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.teams = this.teamService.getTeams();
  }

  updateSelectedTeam() {
    this.selectedTeam = this.teams.find(team => team.name === this.selectedTeamName) || null;
  }

  receivePlayer(updatedPlayer: Player) {
    if (this.selectedTeam) {
      this.teamService.updatePlayer(this.selectedTeam.name, updatedPlayer);
      Swal.fire({
        title: 'GOOD JOB!',
        text: 'PLAYER UPDATED CORRECTLY.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  }
  
}
