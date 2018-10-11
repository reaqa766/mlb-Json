import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayersService } from '../app/services/players.service';
import { PlayersComponent } from './players/players.component';
import { DataPlayersComponent } from './data-players/data-players.component';
import { CargaDiariaComponent } from './components/carga-diaria/carga-diaria.component';
import { SearchPipe} from './filter.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    DataPlayersComponent,
    CargaDiariaComponent,
    SearchPipe,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
