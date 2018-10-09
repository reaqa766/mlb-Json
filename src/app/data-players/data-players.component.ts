import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';


@Component({
  selector: 'app-data-players',
  templateUrl: './data-players.component.html',
  styleUrls: ['./data-players.component.css']
})
export class DataPlayersComponent implements OnInit {

  public players = [];
  groups: any;
  selectedGroup: any;
  elarray: any;
  

  constructor(private playerService: PlayersService) { }

  ngOnInit() {
    // this.playerService.getPlayers()
    //   .subscribe(data => {
    //     this.players = data;
    //     this.groups = data.stats[0].splits;
    //     for (let group of this.groups){
    //       if (group.group === "hitting"){
    //         this.selectedGroup = group.stat;
    //         this.elarray = this.selectedGroup;
            // console.log("desired data: ", this.elarray);
        //   }
        // }
        // console.log('data:', data.stats[0].splits);
        // console.log('data es:', data.stats[0].splits[2].stat);
        // Object.keys(this.players).map((key, index) => {
        //   this.players[key];
          // console.log('test', key, index);
      //   });
      // });
  }


// },
}

