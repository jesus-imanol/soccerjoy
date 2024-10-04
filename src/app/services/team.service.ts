import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class TeamService {

  addPlayer(game: FormGroup) {
    const players = game.get('players') as FormArray;
    players.push(new FormGroup({
      name: new FormControl('', Validators.required),
      position: new FormControl('', Validators.required),
    }));
  }

  removePlayer(game: FormGroup, index: number) {
    const players = game.get('players') as FormArray;
    players.removeAt(index);
  }

  getPlayers(game: FormGroup): FormArray {
    return game.get('players') as FormArray;
  }

  saveTeam(game: FormGroup) {
    console.log(game.value);
  }
}