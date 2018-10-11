import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../services/players.service';
import { take } from 'rxjs/operators';
import { Players } from '../../interfaces/players';
import { PaginationComponent } from '../pagination/pagination.component';


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
  searchText: string;
  playerAuxList = [];

  playersList = [
    {name:"Jose Altuve",
    position : "segunda base"},
    
    {name : "Gleyber Torres",
    position : "segunda base"},

    {name : "Ronald Acuña Jr.",
    position : "Leftfield"},

    {name : "Ender Inciarte",
    position : "Centerfield"}

  ]
  
  
  constructor(private playerService: PlayersService) { }

  ngOnInit() {
    // this.playerService.getPlayerDaily();
    this.getPlayersMap();
    console.log('tres', this.players);
    this.playerAuxList=this.playersList;
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

  filterPositions(positions:string) {
    for(let player of this.playersList) {
      if ( player.position == positions)
      { this.playerAuxList.push(player)

      }

    }

  }
  

}
  







