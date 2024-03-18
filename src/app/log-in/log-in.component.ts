import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [NavBarComponent,FormsModule,NgIf],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('REC-Login')
}
emails=''
pass=''


submitForm(form: any): void {
  console.log(form.value);
  alert('your Response has been recorded')
  form.resetForm();
}


}
