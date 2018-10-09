import { TestBed, inject } from '@angular/core/testing';

import { DataPlayersService } from './data-players.service';

describe('DataPlayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataPlayersService]
    });
  });

  it('should be created', inject([DataPlayersService], (service: DataPlayersService) => {
    expect(service).toBeTruthy();
  }));
});
