import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../../models/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() area: string | undefined; 
  @Input() card: Card | undefined; 

  cards: Card[] = [ ];

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
  //     highlightedText = highlightedText.replace(regex, '<span class="highlighted">$&</span>');
  //   });
  //   return highlightedText;

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
