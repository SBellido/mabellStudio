import { Component, OnInit } from '@angular/core';
import { Card } from '../../../models/models';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  public area: string = 'marketing';

  cards: Card[] = [
    {
      id: 1,
      tittle: 'estrategias digitales',
      text: 'Son fundamentales en el entorno actual, donde la presencia en línea es esencial para el éxito de cualquier negocio. Estas estrategias engloban una serie de tácticas y herramientas digitales para promocionar productos o servicios, aumentar la visibilidad de la marca y captar clientes en el mundo digital. Entendemos la importancia de las estrategias digitales en el ámbito del marketing. Nos especializamos en el desarrollo de estrategias personalizadas que combinan el uso inteligente de las redes sociales, la optimización de motores de búsqueda (SEO), la publicidad en línea y el marketing de contenidos para alcanzar los objetivos comerciales de nuestros clientes. Nuestro enfoque se basa en la creatividad, la innovación y el análisis de datos para ofrecer resultados tangibles y mejorar la presencia en línea de nuestros clientes.',
      image: '../../../../assets/images/works/DG.png',
      showFullText: false,
      truncatedText: '',
    },    
    {
      id: 2,
      tittle: 'posicionamiento web',
      text: 'Estrategia clave para mejorar la visibilidad y el tráfico orgánico de un sitio web en los motores de búsqueda. Mediante la implementación de técnicas de optimización, como el uso de palabras clave relevantes, la creación de contenido de calidad y la mejora de la estructura del sitio, es posible lograr que una página web aparezca en los primeros resultados de búsqueda. En Mabell Studio, somos expertos en posicionamiento web. Trabajamos de la mano de nuestros clientes para entender sus necesidades y objetivos, y desarrollamos estrategias personalizadas para mejorar su visibilidad en línea. Nuestro enfoque se basa en prácticas éticas y actualizadas de SEO, combinadas con análisis de datos y seguimiento de resultados, para garantizar un posicionamiento efectivo y duradero en los motores de búsqueda.',
      image: '../../../../assets/images/works/DG.png',
      showFullText: false,
      truncatedText: '',
    }, 
    {
      id: 3,
      tittle: 'social media',
      text:'Las redes sociales han transformado la forma en que nos comunicamos y conectamos con el mundo. El marketing en redes sociales se ha convertido en una estrategia fundamental para las empresas, permitiéndoles llegar a una audiencia más amplia y generar engagement con sus seguidores. Entendemos el poder de las redes sociales y nos especializamos en el desarrollo de estrategias efectivas de social media. Trabajamos en colaboración con nuestros clientes para identificar sus objetivos y crear contenido relevante y atractivo para sus audiencias en diferentes plataformas sociales. Nuestro enfoque se basa en la planificación estratégica, la gestión de la comunidad, la monitorización de resultados y el aprovechamiento de las tendencias actuales para lograr el máximo impacto en las redes sociales.',
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
