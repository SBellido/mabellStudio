import { Component, OnInit } from '@angular/core';
import { Card_ } from '../../../models/models';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  public area: string = 'desarrollo';


  cards: Card_[] = [
    {
      id: 1,
      tittle: 'software personalizado',
      text: 'Soluciones digitales a medida para satisfacer necesidades específicas de una empresa o lógica de negocio. Diseñado para adaptarse a los requisitos particulares de una organización, lo que permite una mayor eficiencia y productividad. Implica un análisis detallado de los procesos y requisitos del proyecto, diseño, desarrollo e implementación de una solución tecnológica a medida. Puede abarcar sistemas empresariales, plataformas de gestión, soluciones de comercio electrónico, herramientas de análisis de datos y más. La clave radica encadaptarse a las necesidades y objetivos de cada cliente.',
      image: '../../../../assets/images/works/DG.png',
      showFullText: false,
      truncatedText: '',
    },    
    {
      id: 2,
      tittle: 'webs & apps',
      text: 'El desarrollo web se centra en la creación de interfaces visuales atractivas y funcionales para sitios web, mientras que el desarrollo de aplicaciones se centra en la creación de programas interactivos y funcionalidades para dispositivos móviles y otras plataformas. Ambos procesos requieren un análisis detallado de los requisitos del cliente, planificación de la estructura y la navegación, diseño de interfaces intuitivas y atractivas, e implementación de funcionalidades personalizadas. El objetivo es proporcionar a los usuarios una experiencia fluida y satisfactoria al interactuar con sitios web y aplicaciones.',
      image: '../../../../assets/images/works/DG.png',
      showFullText: false,
      truncatedText: '',

    }, 
    {
      id: 3,
      tittle: 'tiendas online',
      text:'Plataformas digitales que permiten a los usuarios comprar productos o servicios de forma conveniente y segura desde la comodidad de sus hogares. Estas plataformas ofrecen una amplia variedad de productos, opciones de pago seguras y procesos de compra sencillos. Desarrollo y diseñamos tiendas en línea personalizadas que brindan una experiencia de compra fluida y atractiva para los usuarios. Nuestro enfoque se basa en la creación de interfaces intuitivas, diseños atractivos y funcionalidades avanzadas que optimizan la experiencia del usuario y generan resultados comerciales exitosos.',
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
  
  // highlightWords(card: Card): string {
  //   let highlightedText = card.text;
  //   card.highlightedWords.forEach(word => {
  //     const regex = new RegExp(word, 'gi');
  //     highlightedText = highlightedText.replace(regex, '<strong>$&</strong>');
  //   });
  //   return highlightedText;
  // }

  toggleText(card: Card_): void {
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
