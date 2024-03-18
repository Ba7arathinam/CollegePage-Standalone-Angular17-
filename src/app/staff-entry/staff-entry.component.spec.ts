import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffEntryComponent } from './staff-entry.component';

describe('StaffEntryComponent', () => {
  let component: StaffEntryComponent;
  let fixture: ComponentFixture<StaffEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
