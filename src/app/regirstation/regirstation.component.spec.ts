import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegirstationComponent } from './regirstation.component';

describe('RegirstationComponent', () => {
  let component: RegirstationComponent;
  let fixture: ComponentFixture<RegirstationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegirstationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegirstationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
