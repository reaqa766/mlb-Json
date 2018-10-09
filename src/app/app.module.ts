import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayersService } from '../app/services/players.service';
import { PlayersComponent } from './players/players.component';
import { DataPlayersComponent } from './data-players/data-players.component';
import { CargaDiariaComponent } from './components/carga-diaria/carga-diaria.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    DataPlayersComponent,
    CargaDiariaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
