import { Component, inject } from '@angular/core';
import { NavStaffComponent } from '../nav-staff/nav-staff.component';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-department-topper',
  standalone: true,
  imports: [NavStaffComponent,HttpClientModule,NgFor],
  templateUrl: './department-topper.component.html',
  styleUrl: './department-topper.component.css'
})
export class DepartmentTopperComponent {
  students:any[]=[]
  httpClient=inject(HttpClient)
  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('REC-Toppers')
}
ngOnInit() {
  this.httpClient.get('https://freetestapi.com/api/v1/students').subscribe(
    (res) => {
      this.students = res as any[];
      console.log(this.students)
      this.updateCGPA();
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
  );
}

updateCGPA() {
  for (let i = 0; i < this.students.length; i++) {
    var a = this.students[i].gpa;
    if (a < 6 && a >= 5) {
      this.students[i].cgpa = a + 4 + 'GPA';
    } else if (a < 5 && a >= 4) {
      this.students[i].cgpa = a + 5 + 'GPA';
    } else if (a < 4 && a >= 3) {
      this.students[i].cgpa = a + 6 + 'GPA';
    } else if (a < 3 && a >= 2) {
      this.students[i].cgpa = a + 7 + 'GPA';
    } else if (a < 2 && a >= 1) {
      this.students[i].cgpa = a + 8 + 'GPA';
    } else if (a < 1) {
      this.students[i].cgpa = a + 9 + 'GPA';
    }
    const student = this.students[i];
    const nameElement = document.getElementById('dept-name' + i);
    const courseElement = document.getElementById('dept' + i);
    const cgpaElement = document.getElementById('dept-cgpa' + i);
    if (nameElement && courseElement && cgpaElement) {
      nameElement.innerHTML = student.name || '';  // Use empty string if 'name' is null or undefined
      courseElement.innerHTML = (student.courses && student.courses.length > 0) ? student.courses[0] : '';
      cgpaElement.innerHTML = this.students[i].cgpa|| '';  // Use empty string if 'cgpa' is null or undefined
    }


    
  }
}
}
