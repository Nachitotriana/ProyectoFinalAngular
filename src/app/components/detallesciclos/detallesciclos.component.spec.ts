import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesciclosComponent } from './detallesciclos.component';

describe('DetallesciclosComponent', () => {
  let component: DetallesciclosComponent;
  let fixture: ComponentFixture<DetallesciclosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesciclosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesciclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
