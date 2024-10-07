import { Component,Input, Output,EventEmitter } from '@angular/core';
import { AssociatedTeam } from '../services/team.service';
@Component({
  selector: 'app-card-hour',
  standalone: true,
  imports: [],
  templateUrl: './card-hour.component.html',
  styleUrl: './card-hour.component.css'
})
export class CardHourComponent {
  constructor(){}
  @Input() teams = {
    team1: "",
    team2: "",
    hour:""
  }

  @Output() messageEvent = new EventEmitter<AssociatedTeam>();

  sendMessage() {
    const associatTeam: AssociatedTeam = {
      ...this.teams
    }
    this.messageEvent.emit(associatTeam);
  }
}
