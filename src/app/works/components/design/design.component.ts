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
      text: ['Transmite mensajes claros y afectivos.','Aplica en medios impresos y/o digitales.','Resuelve identidad de marca (Branding).','Para empresas, publicidad, cultura y arte.'],
      image: '../../../../assets/images/works/dg_.jpg',
      showFullText: false,
      truncatedText: '',
    }, 
    {
      id: 2,
      tittle: 'UX | UI',
      text: ['Se centra en comprender al usuario.', 'Diseña botones, íconos, tipografía, color.','Interfaces intuitivas y minimalistas.','Garantiza un producto digital eficiente.'],
      image: '../../../../assets/images/ux_ui/ux-ui_.jpg',
      showFullText: false,
      truncatedText: '',
    },    
    {
      id: 3,
      tittle: 'animación & video',
      text:['Herramienta poderosa de comunicación.','Cuenta historias, transmite emociones.','Cautiva y capta la atención del público.','Da vida a ideas, conceptos y mensajes.'],
      image: '../../../../assets/images/animacion.jpg',
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
