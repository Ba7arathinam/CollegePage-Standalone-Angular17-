import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallary',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css'
})
export class GallaryComponent {
  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('REC-Gallery')
}
}
