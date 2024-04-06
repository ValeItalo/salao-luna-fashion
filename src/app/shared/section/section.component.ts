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

hairStyleSrcImagesArray: string[] = ["https://img.freepik.com/fotos-gratis/mulher-jovem-com-um-lindo-cabelo-longo-cacheado-fundo-branco_186202-4852.jpg?w=1060&t=st=1712374087~exp=1712374687~hmac=25c11a51f50420be5f1a39d51c0ed554cfbeeb8d0af3a63347c7cd7f1120c92f",
"https://img.freepik.com/fotos-gratis/retrato-de-uma-linda-mulher-adulta-com-longos-cabelos-vermelhos_186202-8325.jpg?w=740&t=st=1712374505~exp=1712375105~hmac=3fb19998b0b3430a9115ab265e7f2bc0b48f5b84c9e0d5f2ac6176594b2d5901",
"../../../assets/img/arquivo-luna/cabelo-1.png"
];

manicureSrcImagesArray = ["https://img.freepik.com/fotos-gratis/dedos-lindos-e-bem-tratados_186202-446.jpg?w=360&t=st=1712416465~exp=1712417065~hmac=ec2ce083947b27a711aad722bed0e2a281ead78c887407ecdc500eb14923164f",
  "https://img.freepik.com/fotos-gratis/close-up-de-uma-linda-garota-com-unhas-cor-de-rosa-brilhantes-e-labios_186202-7365.jpg?w=360&t=st=1712416487~exp=1712417087~hmac=e101f62e00fb9a0794e5332730e909d2a043eae3b6acb27629c654119026a248",
  "https://img.freepik.com/fotos-gratis/lindas-unhas-de-mulher-com-linda-manicure-francesa-branca_186202-4151.jpg?w=740&t=st=1712374497~exp=1712375097~hmac=57edb197a2ed07121db4316aa7fc8f1f8e69931364948a790a10225bac328eed"
];

micropigmentationSrcImagesArray = [
  "https://img.freepik.com/fotos-gratis/jovem-passando-por-um-tratamento-de-microblading_23-2149102668.jpg?w=360"
];

pedicureSrcImagesArray = ["https://img.freepik.com/fotos-gratis/closeup-fotografia-de-um-pe-feminino-no-salao-spa-no-procedimento-de-pedicura-pernas-femininas-na-agua-decoram-as-flores_186202-4352.jpg?w=900&t=st=1712416496~exp=1712417096~hmac=6e8e2ae9a782ed37cd01f5feba0701a934acbd079ddd48d2284682a0736c83af",
"https://img.freepik.com/fotos-gratis/pe-de-mulher-solteira-com-ferramenta-de-pedicure_186202-745.jpg?w=360"
];

eyebrowSrcImagesArray = ["https://img.freepik.com/fotos-gratis/mulher-passando-por-um-tratamento-de-microblading_23-2149103157.jpg?w=360",
"https://img.freepik.com/fotos-gratis/vista-superior-de-uma-medica-fazendo-um-tratamento-de-sobrancelha-para-uma-mulher_23-2148846014.jpg?w=360"];



}
