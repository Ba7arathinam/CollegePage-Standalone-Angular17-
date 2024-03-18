import { Component } from '@angular/core';
import { NavStaffComponent } from '../nav-staff/nav-staff.component';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-application-track',
  standalone: true,
  imports: [NavStaffComponent,FormsModule,CommonModule],
  templateUrl: './application-track.component.html',
  styleUrl: './application-track.component.css'
})
export class ApplicationTrackComponent {
  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('REC-Track-app')
}
contact=''
AckNum=''

submitForm(form: any): void {
  console.log(form.value);
  alert('your Response has been recorded')
  form.resetForm();
}

}
