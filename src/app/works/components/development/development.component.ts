import { Component, OnInit } from '@angular/core';
import { Card } from '../../../models/models';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

  public area: string = 'desarrollo';
  public icon: string = 'developer_mode';

  cards: Card[] = [
    {
      id: 1,
      tittle: 'software personalizado',
      text: ['Solución tecnológica a medida.', 'Satisface requerimientos particulares.', 'Adaptado a una lógica de negocio.', 'Permite mayor eficiencia y productividad.'],
      image: '../../../../assets/images/dev/software.jpg',
      showFullText: false,
      truncatedText: '',
    },    
    {
      id: 2,
      tittle: 'webs & apps',
      text: ['Planificación de estructura y navegación.','Creación de programas interactivos.','Interfaces atractivas y funcionales.','Experiencia de uso fluída e intuitiva.'],
      image: '../../../../assets/images/dev/web_app.jpg',
      showFullText: false,
      truncatedText: '',
    }, 
    {
      id: 3,
      tittle: 'tiendas online',
      text:['Diseño, desarrollo y mantenimiento.','Variedad de productos y categorias.','Opciones de pago seguras y confiables.','Resultados comerciales exitosos.'],
      image: '../../../../assets/images/dev/tiendas_.jpg',
      showFullText: false,
      truncatedText: '',
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
    card.truncatedText = this.truncateText(card.text.join(' '), 150);
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
