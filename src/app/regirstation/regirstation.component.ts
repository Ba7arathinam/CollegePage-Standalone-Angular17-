import { Component } from '@angular/core';
import { NavStaffComponent } from '../nav-staff/nav-staff.component';
import { AbstractControl, FormControl, FormGroup, FormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import swal from 'sweetalert2';


import { Title } from '@angular/platform-browser';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-regirstation',
  standalone: true,
  imports: [NavStaffComponent,ReactiveFormsModule,NgIf],
  templateUrl: './regirstation.component.html',
  styleUrl: './regirstation.component.css'
})
export class RegirstationComponent {
  characters:any
  randomChar:any
  randomNumber:any
  randomValue:any
  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('REC-Registation')
}
reactiveeFrom:FormGroup|any;
ngOnInit() {
this.reactiveeFrom=new FormGroup({
name:new FormControl(
  "",[   Validators.required,
    Validators.pattern('[a-zA-Z]{3,30}')]  
),
dob: new FormControl(
  "", [Validators.required, this.ageValidator(16, 20)]
),
emailid:new FormControl(
  "",[   Validators.required,
    Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')] 
),
contact:new FormControl(
  "",[   Validators.required,
    Validators.pattern('[6-9]{1}[0-9]{9}')]
),
fname:new FormControl(
  "",[   Validators.required,
    Validators.pattern('[a-zA-Z]{3,30}')]  
),
mname:new FormControl(
  "",[   Validators.required,
    Validators.pattern('[a-zA-Z]{3,30}')]  
),
fcontact:new FormControl(
  "",[   Validators.required,
    Validators.pattern('[6-9]{1}[0-9]{9}')]
),
mcontact:new FormControl(
  "",[   Validators.required,
    Validators.pattern('[6-9]{1}[0-9]{9}')]
),
mark1:new FormControl(
  "",[   Validators.required,Validators.min(300), Validators.max(500)]  
),
mark2:new FormControl(
  "",[   Validators.required,Validators.min(350), Validators.max(600)]  
),
pmark:new FormControl(      
  "",[   Validators.required, Validators.min(35), Validators.max(100)]  
  ),
cmark:new FormControl(
  "",[   Validators.required,Validators.min(35), Validators.max(100)]  
),
mmark:new FormControl(
  "",[   Validators.required,Validators.min(35), Validators.max(100)]  

),
file:new FormControl(
  "",[   Validators.required]  
),
})
  
}
 getRandomValue() {
   this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   this.randomChar = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
   this.randomNumber = Math.floor(Math.random() * 1000);
   this.randomValue = `rec${this.randomChar}${this.randomNumber}`;

  return this.randomValue;
}





onsubmit(Reactive: Event) {
  Reactive.preventDefault();

  if (this.reactiveeFrom.valid) {
    const trackNumber = this.getRandomValue(); 
    alert('Data\'s are Submitted Successfully');
    (swal as any).fire({
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Rajalakshmi_Engineering_College_%28REC%29_Chennai_Logo.jpg/626px-Rajalakshmi_Engineering_College_%28REC%29_Chennai_Logo.jpg",
          imageHeight: 125,
          imageWidth: 150,
          html: `<h2>Congrats✨Your are Successfully Registered✅!</h2><br><h3 >Your Track Number is <strong>${trackNumber}</strong></h3>`,
          icon: 'success',
          customClass: {
              confirmButton: 'my-confirm-button'
          },
          buttonsStyling: true,
          confirmButtonText: 'OK'
      });
    console.log(this.reactiveeFrom.value);
    this.reactiveeFrom.reset();
  } else {
    this.markAllFieldsAsTouched();
  }
}

markAllFieldsAsTouched(): void {
  Object.keys(this.reactiveeFrom.controls).forEach(field => {
    const control = this.reactiveeFrom.get(field);
    control.markAsTouched({ onlySelf: true });
  });
}

ageValidator(minAge: number, maxAge: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; // No validation if no date is provided
    }

    const today = new Date();
    const birthDate = new Date(control.value);

    const age = today.getFullYear() - birthDate.getFullYear();

    if (age < minAge || age > maxAge) {
      return { ageRange: true };
    }

    return null; // Validation passed
  };
}



}
