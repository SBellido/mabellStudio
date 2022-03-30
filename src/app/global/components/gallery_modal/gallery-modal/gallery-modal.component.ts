import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GalleryImage } from 'src/app/models/models';
import { GalleryService } from 'src/app/services/gallery.services';

@Component({
  selector: 'app-gallery-modal',
  templateUrl: './gallery-modal.component.html',
  styleUrls: ['./gallery-modal.component.scss']
})
export class GalleryModalComponent implements OnInit, OnDestroy {

  public image: GalleryImage = {
    src: '',
    position: 0,
    alt: '',
    first: false,
    last: false
  } 
  private subscription: Subscription | undefined;

  constructor(
    private ref: ChangeDetectorRef,
    private readonly galleryService: GalleryService
  ) {
  }

  ngOnInit(): void {
    this.getImageSelected();
  }

  getImageSelected(): void {
    this.subscription = this.galleryService.getImageSelected()
      .subscribe((image: GalleryImage) => {
        this.image = image;
        this.ref.detectChanges();
      });
  }

  changeImg(move: number): void {
    if (this.image != undefined) {
      const position = this.image.position + move;
      this.galleryService.selectImage(position);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription != undefined) {
      this.subscription.unsubscribe();
    }
  }
}