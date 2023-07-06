import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(text: string, highlightedWords: string[]): string {
    if (!highlightedWords || highlightedWords.length === 0) {
      return text;
    }

    const regex = new RegExp(`(${highlightedWords.join('|')})`, 'gi');
    return text.replace(regex, '<span class="highlighted">$&</span>');
  }
}
