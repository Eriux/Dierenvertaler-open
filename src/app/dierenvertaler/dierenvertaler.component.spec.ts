import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DierenvertalerComponent } from './dierenvertaler.component';

describe('DierenvertalerComponent', () => {
  let component: DierenvertalerComponent;
  let fixture: ComponentFixture<DierenvertalerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DierenvertalerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DierenvertalerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
