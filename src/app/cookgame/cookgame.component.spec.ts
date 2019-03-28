import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookgameComponent } from './cookgame.component';

describe('CookgameComponent', () => {
  let component: CookgameComponent;
  let fixture: ComponentFixture<CookgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
