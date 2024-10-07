import { Component, Input } from '@angular/core';
import { AssociatedTeam } from '../../services/team.service';

@Component({
  selector: 'app-card-player-hour',
  standalone: true,
  imports: [],
  templateUrl: './card-player-hour.component.html',
  styleUrl: './card-player-hour.component.css'
})
export class CardPlayerHourComponent {
    @Input() associatedTeam : AssociatedTeam = {
      team1:"",
      team2:"",
      hour:""
    }
}
