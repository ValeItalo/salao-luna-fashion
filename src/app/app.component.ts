import { Component } from '@angular/core';
import { HomeComponent } from './component/home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [HomeComponent]
})
export class AppComponent {
}
