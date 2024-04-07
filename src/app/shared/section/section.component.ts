import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-section',
    standalone: true,
    templateUrl: './section.component.html',
    styleUrl: './section.component.scss',
    imports: [MatListModule, MatDividerModule, MatIconModule, CardComponent]
})
export class SectionComponent {

hairStyleSrcImagesArray: string[] = [
"../../../assets/img/arquivo-luna/cabelo-1.png",
"../../../assets/img/arquivo-luna/cabelo-2-b.png",
"../../../assets/img/arquivo-luna/cabelo-5.png",
"../../../assets/img/arquivo-luna/cabelo-6.png",
];

manicureSrcImagesArray = [
  "../../../assets/img/arquivo-luna/manicure-1.png",
  "../../../assets/img/arquivo-luna/manicure-2.png",
  "../../../assets/img/arquivo-luna/manicure-3.png",
  "../../../assets/img/arquivo-luna/manicure-4.png",
  "../../../assets/img/arquivo-luna/manicure-5.png",
];

micropigmentationSrcImagesArray = [
  "../../../assets/img/arquivo-luna/micropigmentacao-1.png",
  "../../../assets/img/arquivo-luna/micropigmentacao-2.png",
  "../../../assets/img/arquivo-luna/micropigmentacao-3.png",
];

}
