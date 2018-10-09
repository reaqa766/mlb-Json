import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { take } from 'rxjs/operators'
import { Players } from '../../interfaces/players'


@Component({
  selector: 'app-carga-diaria',
  templateUrl: './carga-diaria.component.html',
  styleUrls: ['./carga-diaria.component.css']
})
export class CargaDiariaComponent implements OnInit {

  public players = [];
  groups: any;
  selectedGroup: any;
  elarray: any;
  datesN: number = 10;
  public y=0;

  constructor(private playerService: PlayersService) { }

  ngOnInit() {
    // this.playerService.getPlayerDaily();
    this.getPlayersMap();
    console.log('tres', this.players);
  }

  //Convertir el Array de Observables a un Array de Objetos. Seleccionar los items necesarios del nuevo Array (con todo el contenido del Json) y colocarlos en un nuevo Array
  getPlayersMap() {
    let InfoObsPlayer = this.playerService.getAllPlayersDaily();
    // console.log(InfoObsPlayer.length);
    let index = 0;
    for (let obs of InfoObsPlayer) {
      obs.pipe(take(1)).subscribe(res => {
        this.players.push(res);

        if ((InfoObsPlayer.length - 1) === index) {
          this.players = this.players.map(player => {
            const newPlayer: Players = {};
            Object.assign(newPlayer, player.people[0]);
            return newPlayer;
          });
        }
        index++;
      })
    }
  }

}
