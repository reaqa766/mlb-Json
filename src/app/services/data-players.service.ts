import { Injectable } from '@angular/core';
import { Stats } from '../interfaces/stats';
import { APIResponse } from '../interfaces/response';
import { Players } from '../interfaces/players';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPlayersService {
  playerCode = 596115;


  private _url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + this.playerCode + '&season=2018&&gamePk=529410&hydrate=stats(type=gameLog)';


  constructor(private http: HttpClient) { }

  getDataPlayers(): Observable<Players[]> {
    return this.http.get<Players[]>(this._url);
  }

}





  // getStatsForPlayer(playerCode: number) {
  //   return new Promise(resolve => {

  //     let firebaseStats = getFirebaseStatsForPlayer(playerCode);

  //     let date = new Date();
  //     let stringDate = date.getMonth()+'-'+date.getDate()+'-'+date.getFullYear();

  //     if (!firebaseStats || firebaseStats.date != stringDate) {
  //       let url = 'https://statsapi.mlb.com/api/v1/people?personIds=' + playerCode + '&season=2018&hydrate=stats(group=hitting,type=gameLog)';
        
  //       let promise = this.http.get<APIResponse<Stats>>(url).toPromise().then((response) => {
  //         // if (response.data[0] && response.data[0].splits) {
  //         //   let split = response.data[0].splits.find((s) => s.group === "hitting");
  //         //   return split.stat;
  //         // }
  //         return parseAPIResponse(response.data);
  //       }).then(stats => {
  //         return uploadToFirebase(playerCode, stats, stringDate);
  //       }).then((stats) => {
  //         resolve(stats);
  //       });
  //     } else {
  //       resolve(firebaseStats)
  //     }
  //   })
  // }


