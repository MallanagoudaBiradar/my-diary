import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May14Component } from './may14.component';

describe('May14Component', () => {
  let component: May14Component;
  let fixture: ComponentFixture<May14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May14Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
