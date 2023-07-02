import { Component, OnInit } from '@angular/core';
import { Card } from '../../../models/models';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  public area: string = 'desarrollo';


  cards: Card[] = [
    {
      id: 1,
      tittle: 'software a medida',
      text: 'Práctica que se centra en la creación de soluciones digitales a medida para satisfacer las necesidades específicas de una empresa o cliente. A diferencia del software comercial o comercial, el software personalizado está diseñado para adaptarse a los requisitos únicos de una organización, lo que permite una mayor eficiencia y productividad. Este enfoque personalizado implica un análisis detallado de los procesos y requisitos del cliente, seguido del diseño, desarrollo e implementación de una solución tecnológica a medida. El software personalizado puede abarcar una amplia gama de aplicaciones, incluidos sistemas empresariales, plataformas de gestión, soluciones de comercio electrónico, herramientas de análisis de datos y más. La clave para el éxito del software personalizado radica en su capacidad para ofrecer una solución precisa y escalable, adaptada a las necesidades y objetivos de cada cliente.',
      image: '../../../../assets/images/works/DG.png',
      showFullText: false,
      truncatedText: '',
    },    
    {
      id: 2,
      tittle: 'webs & apps',
      text: 'Hoy Son cruciales en el mundo digital. El diseño web se centra en la creación de interfaces visuales atractivas y funcionales para sitios web, mientras que el desarrollo de aplicaciones se centra en la creación de programas interactivos y funcionalidades para dispositivos móviles y otras plataformas. Ambos procesos requieren un análisis detallado de los requisitos del cliente, planificación de la estructura y la navegación, diseño de interfaces intuitivas y atractivas, e implementación de funcionalidades personalizadas. El objetivo es proporcionar a los usuarios una experiencia fluida y satisfactoria al interactuar con sitios web y aplicaciones, ya sea para obtener información, realizar transacciones o utilizar servicios específicos.',
      image: '../../../../assets/images/works/DG.png',
      showFullText: false,
      truncatedText: '',
    }, 
    {
      id: 3,
      tittle: 'tiendas en línea',
      text:'Plataformas digitales que permiten a los usuarios comprar productos o servicios de forma conveniente y segura desde la comodidad de sus hogares. Estas plataformas ofrecen una amplia variedad de productos, opciones de pago seguras y procesos de compra sencillos. En Mabell Studio, nos especializamos en el desarrollo y diseño de tiendas en línea personalizadas que brindan una experiencia de compra fluida y atractiva para los usuarios. Nuestro enfoque se basa en la creación de interfaces intuitivas, diseños atractivos y funcionalidades avanzadas que optimizan la experiencia del usuario y generan resultados comerciales exitosos.',
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
