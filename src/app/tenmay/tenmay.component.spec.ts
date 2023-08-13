import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenmayComponent } from './tenmay.component';

describe('TenmayComponent', () => {
  let component: TenmayComponent;
  let fixture: ComponentFixture<TenmayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenmayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenmayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
