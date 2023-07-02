import { Component, OnInit } from '@angular/core';
import { Card } from '../../../models/models';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss'],
})

export class DesignComponent implements OnInit {

  public area: string = 'diseño';

  cards: Card[] = [
    {
      id: 1,
      tittle: 'ux | ui',
      text: 'Diseño que se centra en crear experiencias digitales agradables, intuitivas y satisfactorias para los usuarios. El diseño de UX se centra en comprender las necesidades, expectativas y comportamientos de los usuarios, así como en optimizar la usabilidad y la usabilidad de un producto o servicio digital. Por otro lado, el diseño de la interfaz de usuario se refiere a la apariencia visual y la interacción de los elementos en la interfaz, incluido el diseño de botones, iconos, tipografías y esquemas de color. y experiencia satisfactoria. El objetivo del diseño UX/UI es garantizar que los usuarios puedan interactuar de manera eficiente y agradable con un producto digital, asegurando que cumpla con sus objetivos y les brinde una experiencia positiva y satisfactoria.',
      image: '../../../../assets/images/works/DG.png',
      showFullText: false,
      truncatedText: '',
    },    
    {
      id: 2,
      tittle: 'diseño gráfico',
      text: 'Disciplina creativa y comunicativa que se encarga de crear y combinar elementos visuales, como imágenes, colores, tipografías y formas, para transmitir mensajes claros y efectivos. Su principal objetivo es comunicarse visualmente, a través de diseños atractivos y funcionales, ya sea en medios impresos o digitales. El diseño gráfico abarca diversas áreas, como identidad corporativa, diseño de logotipos, maquetación editorial, diseño web y publicidad, entre otras. Su aplicación está presente en una amplia variedad de campos, desde el ámbito empresarial y publicitario hasta el artístico y cultural.',
      image: '../../../../assets/images/works/DG.png',
      showFullText: false,
      truncatedText: '',
    }, 
    {
      id: 3,
      tittle: 'animación & video',
      text:'herramientas poderosas para contar historias, transmitir mensajes y captar la atención del público. Mediante la combinación de imágenes en movimiento, efectos visuales y narración cautivadora, la animación y el video permiten dar vida a ideas y conceptos de manera visualmente impactante. En Mabell Studio, nos apasiona crear animaciones y videos de alta calidad que transmitan emociones, informen y entretengan a la audiencia. Utilizamos nuestra experiencia en diseño, animación y producción de video para ofrecer soluciones audiovisuales innovadoras y creativas que destacan los valores de nuestra empresa: aprendizaje, superación, apertura y perseverancia..',
      image: '../../../../assets/images/works/DG.png',
      showFullText: false,
      truncatedText: '',
    }
  ];

  constructor() {
    this.cards.forEach((card) => {
      card.showFullText = false;
    });
  }

  ngOnInit(): void {  
    this.topFunction();
  }

  toggleText(card: Card): void {
    card.showFullText = !card.showFullText;
    card.truncatedText = this.truncateText(card.text, 150);
  }
  
  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
