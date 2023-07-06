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
      tittle: 'comunicación visual',
      text: ['Disciplina creativa y comunicativa', 'que se encarga de crear y combinar elementos visuales, como imágenes, colores, tipografías y formas, para transmitir mensajes claros y efectivos. Su principal objetivo es comunicar visualmente a través de diseños atractivos y funcionales, ya sea en medios impresos o digitales. El diseño en comunicación visual abarca diversas áreas, como identidad corporativa, diseño de logotipos, maquetación editorial, diseño web y publicidad, entre otras. Su aplicación resuelve problemas tanto en el campo empresarial y publicitario, como en el cultural y artístico.'],
      image: '../../../../assets/images/works/dg_.jpg',
      showFullText: false,
      truncatedText: '',
      highlightedWords: ['Disciplina creativa y comunicativa', 'imágenes, colores, tipografías y formas', 'mensajes claros y efectivos', ' diseños atractivos y funcionales,', 'identidad corporativa, diseño de logotipos, maquetación editorial, diseño web y publicidad,', 'campo empresarial, publicitario, cultural y artístico.'],
    }, 
    {
      id: 2,
      tittle: 'UX | UI',
      text: ['El diseño de UX (Experiencia de Usuario) se centra en comprender las necesidades', 'expectativas y comportamientos de los usuarios, así como en optimizar la usabilidad de un producto o servicio digital. Por otro lado, el diseño UI (Interfaz de Usuario) se refiere a la apariencia visual y la interacción de los elementos en la interfaz, incluido el diseño de botones, iconos, tipografías y esquemas de color. El objetivo del diseño UX/UI es garantizar que los usuarios puedan interactuar de manera eficiente y agradable con un producto digital, asegurando que cumpla con sus objetivos y les brinde una experiencia positiva y satisfactoria.'],
      image: '../../../../assets/images/ux_ui/ux-ui_.jpg',
      showFullText: false,
      truncatedText: '',
      highlightedWords: ['UX'],
    },    
    {
      id: 3,
      tittle: 'animación & video',
      text:['La animación y el video son disciplinas visuales','que dan vida a ideas y conceptos a través de imágenes en movimiento. Herramientas poderosas de comunicación visual que permiten contar historias, transmitir emociones y capturar la atención del público y le permite experimentar historias, emociones y mensajes de una manera visualmente atractiva. En este ámbito, se combinan técnicas, ideas  y herramientas de vanguardia para dar vida a piezas gráficas audio visuales. Tanto las animaciones 2D y 3D como videos promocionales y explicativos, son una forma impactante de comunicar un mensaje.'],
      image: '../../../../assets/images/animacion.jpg',
      showFullText: false,
      truncatedText: '',
      highlightedWords: ['vida a ideas y conceptos'],
    }
  ];

  constructor() {
    this.cards.forEach((card) => {
      card.showFullText = false;
      card.truncatedText = this.truncateText(card.text[0], 150);
    });
  }

  ngOnInit(): void {  
    this.topFunction();
  }  

  toggleText(card: Card): void {
    card.showFullText = !card.showFullText;
  }

  truncateText(text: string, maxLength: number): string {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
