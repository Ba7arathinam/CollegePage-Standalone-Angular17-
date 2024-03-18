import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegirstationComponent } from './regirstation/regirstation.component';
import { ApplicationTrackComponent } from './application-track/application-track.component';
import { ForgetComponent } from './forget/forget.component';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { StaffEntryComponent } from './staff-entry/staff-entry.component';
import { MarkEntryComponent } from './mark-entry/mark-entry.component';
import { DepartmentTopperComponent } from './department-topper/department-topper.component';import { Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';

export const routes: Routes = [
{path:"home",component:HomeComponent},
{path:"aboutUs",component:AboutUsComponent},
{path:"gallery",component:GallaryComponent},
{path:"contactUs",component:ContactUsComponent},
{path:"login",component:LogInComponent},
{path:"Registration",component:RegirstationComponent},
{path:"Application-Track",component:ApplicationTrackComponent},
{path:"Forget-Password",component:ForgetComponent},
{path:"staff-Home",component:StaffHomeComponent},
{path:"Staff-Entry",component:StaffEntryComponent},
{path:"mark-Entry",component:MarkEntryComponent},
{path:"Toppers",component:DepartmentTopperComponent},
{path:"Departments",component:DepartmentComponent},
{path:"**",component:HomeComponent,pathMatch:'full'},
];
