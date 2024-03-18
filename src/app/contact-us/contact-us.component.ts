import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('REC-contactUs')
}

}
