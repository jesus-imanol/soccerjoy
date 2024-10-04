import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-assign-game-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './assign-game-form.component.html',
  styleUrls: ['./assign-game-form.component.css']
})
export class AssignGameFormComponent {
  game: FormGroup;

  constructor(private teamService: TeamService) {
    this.game = new FormGroup({
      teamName: new FormControl('', Validators.required),
      players: new FormArray([]),
    });
    this.initPlayers(6);
  }
  initPlayers(count: number) {
    for (let i = 0; i < count; i++) {
      this.addPlayer();
    }
  }

  addPlayer() {
    if (this.players.length < 6) {
      this.teamService.addPlayer(this.game);
    } else {
      alert('No puedes agregar más de 6 jugadores');
    }
  }

  removePlayer(index: number) {
    this.teamService.removePlayer(this.game, index);
  }

  get players() {
    return this.teamService.getPlayers(this.game);
  }

  onSubmit() {
    this.teamService.saveTeam(this.game);
  }
}
