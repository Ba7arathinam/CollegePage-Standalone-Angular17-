import { Component } from '@angular/core';
import { NavStaffComponent } from '../nav-staff/nav-staff.component';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-staff-entry',
  standalone: true,
  imports: [NavStaffComponent,FormsModule],
  templateUrl: './staff-entry.component.html',
  styleUrl: './staff-entry.component.css'
})
export class StaffEntryComponent {
  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('REC-StaffEntry')
}
}
