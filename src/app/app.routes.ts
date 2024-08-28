// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route should point to HomeComponent
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
];
