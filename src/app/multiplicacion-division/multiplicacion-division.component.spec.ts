import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacionDivisionComponent } from './multiplicacion-division.component';

describe('MultiplicacionDivisionComponent', () => {
  let component: MultiplicacionDivisionComponent;
  let fixture: ComponentFixture<MultiplicacionDivisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicacionDivisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicacionDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
