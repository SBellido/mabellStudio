import { Component, OnInit } from '@angular/core';
import { Card } from '../../../models/models';

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrls: ['./development.component.scss']
})
export class DevelopmentComponent implements OnInit {

 
  cards: Card[] = [
    {
      id: 1,
      tittle: 'custom software',
      text: 'Is a practice that focuses on creating tailored digital solutions to meet the specific needs of a business or client. Unlike off-the-shelf or commercial software, custom software is designed to adapt to the unique requirements of an organization, enabling greater efficiency and productivity. This personalized approach involves detailed analysis of the client´s processes and requirements, followed by the design, development, and deployment of a bespoke technological solution. Custom software can encompass a wide range of applications, including enterprise systems, management platforms, e-commerce solutions, data analysis tools, and more. The key to successful custom software lies in its ability to deliver a precise and scalable solution, tailored to the needs and goals of each client.',
      image: '../../../../assets/images/works/DG.png',
      showFullText: false,
      truncatedText: '',
    },    
    {
      id: 2,
      tittle: 'webs & apps',
      text: 'Are crucial activities in the digital world. Web design focuses on creating attractive and functional visual interfaces for websites, while app development focuses on creating interactive programs and functionalities for mobile devices and other platforms. Both processes require detailed analysis of client requirements, planning of structure and navigation, design of intuitive and appealing interfaces, and implementation of custom functionalities. The goal is to provide users with a smooth and satisfying experience when interacting with websites and apps, whether it´s for obtaining information, conducting transactions, or utilizing specific services.',
      image: '../../../../assets/images/works/DG.png',
      showFullText: false,
      truncatedText: '',
    }, 
    {
      id: 3,
      tittle: 'e-commerce',
      text:'Is a design and animation technique that combines graphic elements, movement and narrative to create dynamic and attractive visual content. Through the use of visual effects, fluid transitions and captivating animations, motion graphics seeks to communicate effectively and memorably. This discipline is applied in various media, such as promotional videos, presentations, advertising and audiovisual content in general. The objective of motion graphics is to convey messages in a clear, entertaining and persuasive way, capturing the attention of the viewer and generating visual impact. By combining graphic design, animation and sound, motion graphics allows you to tell captivating visual stories that stay in the minds of the audience.',
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
