import { ComponentFixture, TestBed } from '@angular/core/testing';

import { May16Component } from './may16.component';

describe('May16Component', () => {
  let component: May16Component;
  let fixture: ComponentFixture<May16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ May16Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(May16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
