import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbaordComponent } from './dashbaord.component';

describe('DashbaordComponent', () => {
  let component: DashbaordComponent;
  let fixture: ComponentFixture<DashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbaordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
