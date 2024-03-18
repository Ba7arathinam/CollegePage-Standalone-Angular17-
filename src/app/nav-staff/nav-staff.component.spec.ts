import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavStaffComponent } from './nav-staff.component';

describe('NavStaffComponent', () => {
  let component: NavStaffComponent;
  let fixture: ComponentFixture<NavStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavStaffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
