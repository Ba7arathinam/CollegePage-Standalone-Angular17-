import { Component, inject } from '@angular/core';
import { NavStaffComponent } from '../nav-staff/nav-staff.component';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-staff-home',
  standalone: true,
  imports: [NavStaffComponent,HttpClientModule,NgFor],
  templateUrl: './staff-home.component.html',
  styleUrl: './staff-home.component.css'
})
export class StaffHomeComponent {
  empObj: any[] = [];


  httpClient=inject(HttpClient)
  constructor(private Titleserice: Title) {
    this.Titleserice.setTitle('REC-StaffHome');
  }
 
  ngOnInit() {
    this.httpClient.get('https://freetestapi.com/api/v1/students').subscribe(
      (res) => {
        this.empObj = res as any[];
        this.studentData();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  studentData() {
    for (let i = 0; i < 40; i++) {
      const id = document.getElementById('id' + i);
      const name = document.getElementById('name' + i);
      const age = document.getElementById('age' + i);
      const gender = document.getElementById('gender' + i);
      const course = document.getElementById('course' + i);
      const email = document.getElementById('email' + i);
      const gp = document.getElementById('gp' + i);

      if (id && name && age && gender && course && email && gp) {
        const emp = this.empObj[i];
        id.innerHTML = emp.id;
        name.innerHTML = emp.name;
        age.innerHTML = emp.age;
        gender.innerHTML = emp.gender;
        course.innerHTML = emp.courses[0];
        email.innerHTML = emp.email;
        const a = emp.gpa;
        
        if (a < 6 && a >= 5) {
          gp.innerHTML = (a + 4).toString();
        } else if (a < 5 && a >= 4) {
          gp.innerHTML = (a + 5).toString();
        } else if (a < 4 && a >= 3) {
          gp.innerHTML = (a + 6).toString();
        } else if (a < 3 && a >= 2) {
          gp.innerHTML = (a + 7).toString();
        } else if (a < 2 && a >= 1) {
          gp.innerHTML = (a + 8).toString();
        } else if (a < 1) {
          gp.innerHTML = (a + 9).toString();
        }
      }
    }
  }

}
