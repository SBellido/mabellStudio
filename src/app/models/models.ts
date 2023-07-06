export interface GalleryImage {
  src: string;
  position: number;
  alt: string;
  first: boolean;
  last: boolean;
}

export interface Card {
  id: number;
  tittle: string; 
  text: string[];
  image: string;
  showFullText: boolean;
  truncatedText: string;
  highlightedWords: string[];
}
