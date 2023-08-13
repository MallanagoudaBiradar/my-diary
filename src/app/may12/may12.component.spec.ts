import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May12Component } from './may12.component';

describe('May12Component', () => {
  let component: May12Component;
  let fixture: ComponentFixture<May12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May12Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
