import { Component, OnInit } from '@angular/core';
import { TeamService, Team, Player } from '../../services/team.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-assign-game-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './assign-game-form.component.html',
  styleUrls: ['./assign-game-form.component.css']
})
export class AssignGameFormComponent implements OnInit {
  teams: Team[] = [];
  game: FormGroup;

  constructor(private teamService: TeamService) {
    this.game = new FormGroup({
      nameGame: new FormControl('', [Validators.required, Validators.minLength(3)]),
      n1: new FormControl('', [Validators.required, Validators.minLength(3)]),
      n2: new FormControl('', [Validators.required, Validators.minLength(3)]),
      n3: new FormControl('', [Validators.required, Validators.minLength(3)]),
      n4: new FormControl('', [Validators.required, Validators.minLength(3)]),
      n5: new FormControl('', [Validators.required, Validators.minLength(3)]),
      n6: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  ngOnInit(): void {
    this.teams = this.teamService.getTeams();
  }

  addGame(): boolean {
    if (this.game.invalid) {
      this.game.markAllAsTouched();
      return false;
    }

    const players = [
      this.game.value.n1, 
      this.game.value.n2, 
      this.game.value.n3,
      this.game.value.n4, 
      this.game.value.n5, 
      this.game.value.n6
    ];

    if (this.teamService.addTeam(this.game.value.nameGame, players)) {
      Swal.fire({
        title: "Good job!",
        text: "TEAM ADDED SUCCESS",
        icon: "success"
      });
      return true;
    }

    return false;
  }
  isFieldInvalid(fieldName: string): boolean {
    const control = this.game.get(fieldName);
    return !!control && control.invalid && (control.touched || control.dirty);
  }  
}
