import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GallaryComponent } from './gallary/gallary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,HomeComponent,AboutUsComponent,ContactUsComponent,GallaryComponent, FormsModule],
  providers:[DataService],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CollegePage-SA';
}
