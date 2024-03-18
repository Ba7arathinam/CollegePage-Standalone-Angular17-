import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentTopperComponent } from './department-topper.component';

describe('DepartmentTopperComponent', () => {
  let component: DepartmentTopperComponent;
  let fixture: ComponentFixture<DepartmentTopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentTopperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartmentTopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
