import { Component } from '@angular/core';
import { NavStaffComponent } from '../nav-staff/nav-staff.component';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mark-entry',
  standalone: true,
  imports: [NavStaffComponent,FormsModule],
  templateUrl: './mark-entry.component.html',
  styleUrl: './mark-entry.component.css'
})
export class MarkEntryComponent {
  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('REC-AboutUs')
}
}
