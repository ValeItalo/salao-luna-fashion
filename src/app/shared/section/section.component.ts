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

// manicureSrcImagesArray = [
//   "../../../assets/img/arquivo-luna/manicure-1.png",
//   "../../../assets/img/arquivo-luna/manicure-2.png",
//   "../../../assets/img/arquivo-luna/manicure-3.png",
//   "../../../assets/img/arquivo-luna/manicure-4.png",
//   "../../../assets/img/arquivo-luna/manicure-5.png",
// ];

// micropigmentationSrcImagesArray = [
//   "../../../assets/img/arquivo-luna/micropigmentacao-1.png",
//   "../../../assets/img/arquivo-luna/micropigmentacao-2.png",
//   "../../../assets/img/arquivo-luna/micropigmentacao-3.png",
// ];


manicureSrcImagesArray = ["https://img.freepik.com/fotos-gratis/dedos-lindos-e-bem-tratados_186202-446.jpg?w=360&t=st=1712416465~exp=1712417065~hmac=ec2ce083947b27a711aad722bed0e2a281ead78c887407ecdc500eb14923164f",
  "https://img.freepik.com/fotos-gratis/close-up-de-uma-linda-garota-com-unhas-cor-de-rosa-brilhantes-e-labios_186202-7365.jpg?w=360&t=st=1712416487~exp=1712417087~hmac=e101f62e00fb9a0794e5332730e909d2a043eae3b6acb27629c654119026a248",
  "https://img.freepik.com/fotos-gratis/maos-de-mulher-bonita-com-lindas-unhas-depois-de-salao-de-manicure-com-manicure-francesa_186202-4153.jpg?w=740"
];

micropigmentationSrcImagesArray = [
  "https://img.freepik.com/fotos-gratis/jovem-passando-por-um-tratamento-de-microblading_23-2149102668.jpg?w=360",
  "https://img.freepik.com/fotos-gratis/mulher-passando-por-um-tratamento-de-microblading_23-2149103157.jpg?w=360",
"https://img.freepik.com/fotos-gratis/vista-superior-de-uma-medica-fazendo-um-tratamento-de-sobrancelha-para-uma-mulher_23-2148846014.jpg?w=360"
];


// pedicureSrcImagesArray = ["https://img.freepik.com/fotos-gratis/closeup-fotografia-de-um-pe-feminino-no-salao-spa-no-procedimento-de-pedicura-pernas-femininas-na-agua-decoram-as-flores_186202-4352.jpg?w=900&t=st=1712416496~exp=1712417096~hmac=6e8e2ae9a782ed37cd01f5feba0701a934acbd079ddd48d2284682a0736c83af",
// "https://img.freepik.com/fotos-gratis/pe-de-mulher-solteira-com-ferramenta-de-pedicure_186202-745.jpg?w=360"
// ];

eyebrowSrcImagesArray = ["https://img.freepik.com/fotos-gratis/mulher-passando-por-um-tratamento-de-microblading_23-2149103157.jpg?w=360",
"https://img.freepik.com/fotos-gratis/vista-superior-de-uma-medica-fazendo-um-tratamento-de-sobrancelha-para-uma-mulher_23-2148846014.jpg?w=360"];

}
