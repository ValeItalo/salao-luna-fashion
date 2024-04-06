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
hairStyleImagesArray: string[] = ["https://img.freepik.com/fotos-gratis/mulher-jovem-com-um-lindo-cabelo-longo-cacheado-fundo-branco_186202-4852.jpg?w=1060&t=st=1712374087~exp=1712374687~hmac=25c11a51f50420be5f1a39d51c0ed554cfbeeb8d0af3a63347c7cd7f1120c92f",
"https://img.freepik.com/fotos-gratis/retrato-de-uma-linda-mulher-adulta-com-longos-cabelos-vermelhos_186202-8325.jpg?w=740&t=st=1712374505~exp=1712375105~hmac=3fb19998b0b3430a9115ab265e7f2bc0b48f5b84c9e0d5f2ac6176594b2d5901",
"../../../assets/img/arquivo-luna/cabelo-1.png"
];

manicureImagesArray = [""]



}
