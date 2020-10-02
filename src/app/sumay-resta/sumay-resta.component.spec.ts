import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumayRestaComponent } from './sumay-resta.component';

describe('SumayRestaComponent', () => {
  let component: SumayRestaComponent;
  let fixture: ComponentFixture<SumayRestaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumayRestaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumayRestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
