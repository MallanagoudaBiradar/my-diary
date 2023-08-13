import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May17Component } from './may17.component';

describe('May17Component', () => {
  let component: May17Component;
  let fixture: ComponentFixture<May17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May17Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
