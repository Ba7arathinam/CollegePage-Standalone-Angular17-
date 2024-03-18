import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('REC-Home')
}
}
