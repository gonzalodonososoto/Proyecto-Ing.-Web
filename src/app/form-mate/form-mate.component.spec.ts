import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMateComponent } from './form-mate.component';

describe('FormMateComponent', () => {
  let component: FormMateComponent;
  let fixture: ComponentFixture<FormMateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
