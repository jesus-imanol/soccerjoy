import { Component,OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { TeamService,Player,AssociatedTeam } from '../../services/team.service';

import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { CardPlayerHourComponent } from '../card-player-hour/card-player-hour.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-view-player',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,CardPlayerHourComponent,RouterLink],
  templateUrl: './view-player.component.html',
  styleUrl: './view-player.component.css'
})
export class ViewPlayerComponent implements OnInit {
    associatedTeams : AssociatedTeam[] = []
    search: FormGroup;
    playerInfo: { player: Player | null, team: string | null } | null = null;
    constructor(private teamService : TeamService){
      this.search = new FormGroup({
        namePlayer: new FormControl('')
      })
    }
    ngOnInit() {
      this.loadAssociatedTeams();
    }
    ngDoCheck() {
      this.loadAssociatedTeams();
    }
    loadAssociatedTeams() {
      const teamsAsi = localStorage.getItem('associatedTeams');
       if (teamsAsi) {
         this.associatedTeams = JSON.parse(teamsAsi);
        }
       }
    searchPlayer() {
      this.playerInfo = this.teamService.searchPlayer(this.search.value.namePlayer);
  
      if (this.playerInfo.player) {
        Swal.fire({
          title: 'Player found',
          text: `Se encontró: ${this.playerInfo.player.name }`,
          icon: 'success',
        });
      } else {
        Swal.fire({
          title: `${this.search.value.namePlayer} not found `,
          text: 'Nada',
          icon: 'error',
        });
      }
    }
}
