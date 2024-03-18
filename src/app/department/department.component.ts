import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavStaffComponent } from '../nav-staff/nav-staff.component';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [NavStaffComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('REC-Department')}

}
