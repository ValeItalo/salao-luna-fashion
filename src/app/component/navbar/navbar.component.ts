import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

scrollToDiv(divId: string) {
  const element = document.getElementById(divId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
// lastScrollTop = 0;

//   @HostListener('window:scroll', ['$event'])
//   onWindowScroll() {
//     let st = window.pageYOffset || document.documentElement.scrollTop;
//     let navbar = document.getElementById('navbar');

//     if (navbar) {
//       if (st > this.lastScrollTop) {
//         // downscroll code
//         navbar.style.top = '-61px';
//       } else {
//         // upscroll code
//         navbar.style.top = '0';
//       }
//     }

//     this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
//   }
}
