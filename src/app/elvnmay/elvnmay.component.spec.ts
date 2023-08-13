import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElvnmayComponent } from './elvnmay.component';

describe('ElvnmayComponent', () => {
  let component: ElvnmayComponent;
  let fixture: ComponentFixture<ElvnmayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElvnmayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElvnmayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
