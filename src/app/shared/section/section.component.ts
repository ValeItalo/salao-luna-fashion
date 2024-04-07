import { Component } from '@angular/core';
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
"../../../assets/img/arquivo-luna/cabelo-4.png",
"../../../assets/img/arquivo-luna/cabelo-2-b.png"
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
  "https://img.freepik.com/fotos-gratis/jovem-passando-por-um-tratamento-de-microblading_23-2149102668.jpg?w=360",

];

pedicureSrcImagesArray = [
  "../../../assets/img/arquivo-luna/pedicure-1.png",
  "https://img.freepik.com/fotos-gratis/closeup-fotografia-de-um-pe-feminino-no-salao-spa-no-procedimento-de-pedicura-pernas-femininas-na-agua-decoram-as-flores_186202-4352.jpg?w=900&t=st=1712416496~exp=1712417096~hmac=6e8e2ae9a782ed37cd01f5feba0701a934acbd079ddd48d2284682a0736c83af",
  "../../../assets/img/arquivo-luna/pedicure-2.png",
  "https://img.freepik.com/fotos-gratis/pe-de-mulher-solteira-com-ferramenta-de-pedicure_186202-745.jpg?w=360"
];

eyebrowSrcImagesArray = [
  "https://img.freepik.com/fotos-gratis/mulher-passando-por-um-tratamento-de-microblading_23-2149103157.jpg?w=360",
"https://img.freepik.com/fotos-gratis/vista-superior-de-uma-medica-fazendo-um-tratamento-de-sobrancelha-para-uma-mulher_23-2148846014.jpg?w=360"];



}
