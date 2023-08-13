import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May13Component } from './may13.component';

describe('May13Component', () => {
  let component: May13Component;
  let fixture: ComponentFixture<May13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May13Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
