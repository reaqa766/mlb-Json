import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDiariaComponent } from './carga-diaria.component';

describe('CargaDiariaComponent', () => {
  let component: CargaDiariaComponent;
  let fixture: ComponentFixture<CargaDiariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDiariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
