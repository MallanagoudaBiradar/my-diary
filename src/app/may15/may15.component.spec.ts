import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May15Component } from './may15.component';

describe('May15Component', () => {
  let component: May15Component;
  let fixture: ComponentFixture<May15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May15Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
