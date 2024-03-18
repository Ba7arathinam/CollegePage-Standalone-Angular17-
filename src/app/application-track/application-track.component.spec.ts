import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationTrackComponent } from './application-track.component';

describe('ApplicationTrackComponent', () => {
  let component: ApplicationTrackComponent;
  let fixture: ComponentFixture<ApplicationTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationTrackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplicationTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
