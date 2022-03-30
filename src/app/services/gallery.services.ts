import { BehaviorSubject, Observable } from "rxjs";
import { GalleryImage } from "../models/models";

export class GalleryService {
  
  public image: GalleryImage = {
    src: '',
    position: 0,
    alt: '',
    first: false,
    last: false
  } 

  private galleryImages: GalleryImage[] = [];
  private gallery$: BehaviorSubject<GalleryImage[]> = new BehaviorSubject(this.galleryImages);
  private gallerySelected$: BehaviorSubject<GalleryImage> = new BehaviorSubject(this.image);

  constructor() {
  }

  getGallery(): Observable<GalleryImage[]> {
    return this.gallery$.asObservable();
  }

  getImageSelected(): Observable<GalleryImage> {
    return this.gallerySelected$.asObservable();
  }

  createGallery(): void {
    this.galleryImages = [];
    for (let i = 0; i < 5; i++) {
      this.galleryImages.push(
        {
          src: `assets/images/image_${i}.jpg`,
          position: i,
          alt: `Image ${i}`,
          first: (i === 0),
          last: (i === 4)
        });
    }
    this.gallery$.next(this.galleryImages);
  }

  selectImage(position: number): void {
    if (position >= 0 && position < this.galleryImages.length) {
      this.gallerySelected$.next(this.galleryImages[position]);
    }
  }
}