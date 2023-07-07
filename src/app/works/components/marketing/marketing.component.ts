import { Component, OnInit } from '@angular/core';
import { Card } from '../../../models/models';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  public area: string = 'marketing';
  public icon: string = 'album';

  cards: Card[] = [
    {
      id: 1,
      tittle: 'estrategias digitales',
      text: ['Publicidad atractiva y en línea.', 'Creatividad, innovasión y análisis.','Visibiliad de marca y capción de clientes.','Uso inteligente de Redes Sociales.'],
      image: '../../../../assets/images/estrategias_.jpg',
      showFullText: false,
      truncatedText: '',
    },    
    {
      id: 2,
      tittle: 'posicionamiento web',
      text: ['Técnicas de optimización en búsquedas.', 'Uso de palabras clave relevantes.', 'Creación de contenido de calidad.', 'Análisis y seguimiento de resultados.'],
      image: '../../../../assets/images/posiciionamiento.jpg',
      showFullText: false,
      truncatedText: '',
    }, 
    {
      id: 3,
      tittle: 'social media',
      text:['Crea contenido relevante y atractivo.','Permite llegar a una mayor audiencia.','Genera engagement en sus seguidores.','Gestiona comunidad, emplea tendencias.'],
      image: '../../../../assets/images/social_media.jpg',
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

  toggleText(card: Card): void {
    card.showFullText = !card.showFullText;
    card.truncatedText = this.truncateText(card.text[0], 150);
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
