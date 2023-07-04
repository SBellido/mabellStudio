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
      text: 'Engloban una serie de tácticas y herramientas digitales para promocionar productos o servicios, aumentar la visibilidad de una marca o captar clientes en el mundo digital. Estrategias personalizadas que combinan el uso inteligente de las redes sociales, la optimización de motores de búsqueda (SEO), la publicidad en línea y el marketing de contenidos para alcanzar los objetivos comerciales de la marca. Basado en la creatividad, la innovación y el análisis de datos para ofrecer resultados tangibles y mejorar la presencia en línea de la marca.',
      image: '../../../../assets/images/estrategias_.jpg',
      showFullText: false,
      truncatedText: '',
      highlightedWords: ['herramientas'],     
    },    
    {
      id: 2,
      tittle: 'posicionamiento web',
      text: 'Implementación de técnicas de optimización, como el uso de palabras clave relevantes, la creación de contenido de calidad y la mejora de la estructura del sitio, es posible lograr que una página web aparezca en los primeros resultados de búsqueda. Se deben entender las necesidades y objetivos de cada proyecto, para desarrollar estretegias personalizadas y así mejorar su visibilidad en línea.  Requiere del análisis de datos y seguimiento de resultados, para garantizar un posicionamiento efectivo y duradero.',
      image: '../../../../assets/images/posiciionamiento.jpg',
      showFullText: false,
      truncatedText: '',
      highlightedWords: ['optimización'],     
    }, 
    {
      id: 3,
      tittle: 'social media',
      text:'Las redes sociales han transformado la forma en que nos comunicamos y conectamos con el mundo. El marketing en redes sociales se ha convertido en una estrategia fundamental para las empresas, permitiéndoles llegar a una audiencia más amplia y generar engagement con sus seguidores. Se trata de crear contenido relevante y atractivo para sus audiencias en diferentes plataformas sociales. Se planifican estretegias, se gestiona  la comunidad  y se motorizan los resultados aprovechando tendencias actuales.',
      image: '../../../../assets/images/social_media.jpg',
      showFullText: false,
      truncatedText: '',
      highlightedWords: ['la forma en que nos comunicamos'],     

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
  
  highlightWords(card: Card): string {
    let highlightedText = card.text;
    card.highlightedWords.forEach(word => {
      const regex = new RegExp(word, 'gi');
      highlightedText = highlightedText.replace(regex, '<strong>$&</strong>');
    });
    return highlightedText;
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
