import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  scrollToDiv(divId: string) {
    const element = document.getElementById(divId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
}
