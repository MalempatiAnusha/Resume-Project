import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  constructor(private router: Router) { }

  goBack() {
    this.router.navigate(['/home']);
  }

}
