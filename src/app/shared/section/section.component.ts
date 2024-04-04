import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-section',
    standalone: true,
    templateUrl: './section.component.html',
    styleUrl: './section.component.scss',
    imports: [MatListModule, MatDividerModule, CardComponent]
})
export class SectionComponent {

}
