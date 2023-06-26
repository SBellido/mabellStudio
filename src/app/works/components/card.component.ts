import { Component, OnInit } from '@angular/core';
import { Card } from '../../models/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cards: Card[] = [
    {
      id: 1,
      tittle: 'UX | UI',
      text: 'Is a discipline that focuses on creating pleasant, intuitive and satisfying digital experiences for users. UX design focuses on understanding user needs, expectations, and behaviors, as well as optimizing the usability and usability of a digital product or service. On the other hand, UI design refers to the visual appearance and interaction of elements in the interface, including the design of buttons, icons, typographies, and color schemes. The goal of UX/UI design is to ensure that users can interact efficiently and pleasantly with a digital product, ensuring that it meets their objectives and provides them with a positive and satisfying experience.',
      wordsToHighlight: ['focuses on creating pleasant'],   
      image: '../../../../assets/images/works/DG.png',
      showFullText: false,
      truncatedText: '',
    },    
    {
      id: 2,
      tittle: 'Graphic Design',
      text: 'Is a creative and communicative discipline that is responsible for creating and combining visual elements, such as images, colors, typographies and shapes, to convey clear and effective messages. Its main objective is to communicate visually, through attractive and functional designs, either in print or digital media.Graphic design covers various areas, such as corporate identity, logo design, editorial layout, web design and advertising, among others. Its application is present in a wide variety of fields, from the business and advertising field to the artistic and cultural.',
      wordsToHighlight: ['discipline that is responsible'],
      image: '../../../../assets/images/works/DG.png',
      showFullText: false,
      truncatedText: '',
    }, 
    {
      id: 3,
      tittle: 'Motion Graphic',
      text:'Is a design and animation technique that combines graphic elements, movement and narrative to create dynamic and attractive visual content. Through the use of visual effects, fluid transitions and captivating animations, motion graphics seeks to communicate effectively and memorably. This discipline is applied in various media, such as promotional videos, presentations, advertising and audiovisual content in general. The objective of motion graphics is to convey messages in a clear, entertaining and persuasive way, capturing the attention of the viewer and generating visual impact. By combining graphic design, animation and sound, motion graphics allows you to tell captivating visual stories that stay in the minds of the audience.',
      wordsToHighlight: ['design and animation technique'],
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
