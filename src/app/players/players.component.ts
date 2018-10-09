import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../services/players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  public playersData = [];
  groupsValue: any;
  groups: any;
  selectedGroup: any;
  elarray: any;
  i: number = 1;
  splitValue: number;
  

  constructor(private playerServiceD: PlayersService) { }

  ngOnInit() {
    // this.playerServiceD.getPlayerDayli()
    //   .subscribe(data => {
    //     this.playersData = data;
    //     console.log('REAQA', this.playersData );
    //     for (let pD  of this.playersData){
    //       this.i+=this.i;
    //     this.groupsValue = data.people[0].stats[0].splits[this.i];
    //     if (this.groupsValue.date === Date()) {
    //       this.splitValue=this.i
    //     }
    //     else (this.splitValue=0)
    //     }
    //      console.log('VALUE', this.splitValue);
         

    //     this.groups = data.people[0].stats[0].splits[this.splitValue];
    //     console.log('REAQA22', this.groups);


        // for (let group of this.groups){
          // if (group.group === "hitting"){
            // this.selectedGroup = this.groups;
            // this.elarray = this.selectedGroup;
            // console.log("desired data: ", this.elarray);
          // }
        // }
        // console.log('data:', data.stats[0].splits);
        // console.log('data es:', data.stats[0].splits[2].stat);
        // Object.keys(this.playersData).map((key, index) => {
        //   this.playersData[key];
          // console.log('test', key, index);
        // }
  //     );
  //     };
  // }


}
}
