import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-staff',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './nav-staff.component.html',
  styleUrl: './nav-staff.component.css'
})
export class NavStaffComponent {

}
