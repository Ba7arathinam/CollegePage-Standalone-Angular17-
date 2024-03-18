import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './forget.component.html',
  styleUrl: './forget.component.css'
})
export class ForgetComponent {
  constructor(private Titleserice:Title){
    this.Titleserice.setTitle('Forget')
}
}
