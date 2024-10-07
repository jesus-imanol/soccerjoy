import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private localStorageKey: string = 'equipos';

  public getTeams(): Team[] {
    const storedTeams = localStorage.getItem(this.localStorageKey);
    return storedTeams ? JSON.parse(storedTeams) : [];
  }
  public addTeam(nameGame: string, players: string[]): Team[] {
    const teams = this.getTeams();
    const newTeam: Team = {
      name: nameGame,
      players: players
        .filter(playerName => playerName)
        .map(name => ({ 
          name, 
          goals: 0,       
          sanctions: 0,    
          yellowCards: 0,  
          redCards: 0 
        }))
    };
  
    teams.push(newTeam);
    this.saveTeamsToLocalStorage(teams);
    return teams;
  }
  
  public removeTeam(index: number): Team[] {
    const teams = this.getTeams();
    teams.splice(index, 1);
    this.saveTeamsToLocalStorage(teams);
    return teams;
  }

public removePlayer(teamIndex: number, playerIndex: number): Team[] {
    const teams = this.getTeams();
    teams[teamIndex].players.splice(playerIndex, 1);
    this.saveTeamsToLocalStorage(teams);
    return teams;
  }

  public saveTeamsToLocalStorage(teams: Team[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(teams));
  }
  public updatePlayer(teamName: string, updatedPlayer: Player): Team[] {
    const teams = this.getTeams();
    const teamIndex = teams.findIndex(team => team.name === teamName);
  
    if (teamIndex !== -1) {
      const playerIndex = teams[teamIndex].players.findIndex(player => player.name === updatedPlayer.name);
      if (playerIndex !== -1) {
        teams[teamIndex].players[playerIndex] = updatedPlayer;
        this.saveTeamsToLocalStorage(teams);
      }
    }
    
    return teams;
  }
  public searchPlayer(playerName: string): { player: Player | null, team: string | null } {
    const teams = this.getTeams();
    for (const team of teams) {
      const player = team.players.find(p => p.name === playerName);
      if (player) {
        return { player, team: team.name }; 
      }
    }
    return { player: null, team: null }; 
  }
  
  
}
export interface Player {
  name: string;
  goals: number;
  sanctions: number;
  yellowCards: number; 
  redCards: number;  
}

export interface Team {
  name: string;
  players: Player[];
}
export interface AsocciatedTeams {
  team1: string;
  team2: string;
  hour: string;
}
export interface AssociatedTeam {
  team1: string;
  team2: string;
  hour: string;
}
