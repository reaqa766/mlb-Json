import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Players } from '../interfaces/players';
import { StatsDayliPlayer } from '../interfaces/stats-dayli-player';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  playerCode = 596115;
  gameCode = 563385;


  // playersList = [
  //   {name:"Jose Altuve",
  //   position : "segunda base"},
    
  //   {name : "Gleyber Torres",
  //   position : "segunda base"},

  //   {name : "Ronald Acuña Jr.",
  //   position : "Leftfield"},

  //   {name : "Ender Inciarte",
  //   position : "Centerfield"}

  // ]



  // Array de Codigo de Jugadores
  private playersCode = [
    503556,
    514888,
    660670,
    400121,
    471865,
    453567,
    608566,
    453565,
    453563,
    503556,
    541650,
    542583,
    606115,
    453568,
    453566,
    453564,
    453562,
    453561,
    453550,
    453551,
    571448,
  ]

  // Url del Api con los datos de cada juego para un Jugador particular
  private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&hydrate=stats(group=hitting,type=gameLog)';

  constructor(private http: HttpClient) { }

  //Obtencion de los datos diarios de un solo jugador
  getPlayerDaily(): Observable<StatsDayliPlayer> {
    return this.http.get<StatsDayliPlayer>(this._url);
  }

  // Para colocar todos los Json en un solo array. Genera Obsrvables
  getAllPlayersDaily(): Observable<StatsDayliPlayer | undefined>[] {
    let dataAllPlayers: Observable<StatsDayliPlayer | undefined>[] = [];
    for (let code of this.playersCode) {
      this._url = this._url.replace(this.playerCode.toString(), code.toString())
      let dataP = this.getPlayerDaily();
      dataAllPlayers.push(dataP);
      this.playerCode = code;
    }
    return dataAllPlayers
  }
}
