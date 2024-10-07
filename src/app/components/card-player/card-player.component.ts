import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { Player } from '../../services/team.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  playerr: FormGroup;

  constructor(){
    this.playerr = new FormGroup({
      name: new FormControl(this.player.name),
      goal: new FormControl(this.player.goals),
      sanction: new FormControl(this.player.sanctions),
      yellowCard: new FormControl(this.player.yellowCards),
      redCard: new FormControl(this.player.redCards),
    });
  }

  @Input() player: Player = {
    name: '',
    goals: 0,
    sanctions: 0,
    yellowCards: 0,
    redCards: 0
  };

  @Output() messageEvent = new EventEmitter<Player>();

  updatePlayer() {
    const updatedPlayer: Player = {
      ...this.player,
      goals: this.playerr.value.goal,
      sanctions: this.playerr.value.sanction,
      yellowCards: this.playerr.value.yellowCard,
      redCards: this.playerr.value.redCard
    };
    this.messageEvent.emit(updatedPlayer);
  }
}
