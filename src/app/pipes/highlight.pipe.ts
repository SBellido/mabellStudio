import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(text: string, wordsToHighlight: string[]): string {
    if (!wordsToHighlight || wordsToHighlight.length === 0) {
      return text;
    }

    const regex = new RegExp(`(${wordsToHighlight.join('|')})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
  }
}