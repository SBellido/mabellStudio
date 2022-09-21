import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GalleryImage } from 'src/app/models/models';
import { GalleryService } from 'src/app/services/gallery.services';

@Component({
  selector: 'app-v-life',
  templateUrl: './v-life.component.html',
  styleUrls: ['./v-life.component.scss']
})
export class VLifeComponent implements OnInit {

  imgGallery:string = '';
  images: GalleryImage | undefined;
  activeNext:boolean = false;
  activeBefore:boolean = false;
 
  constructor(
    private router: Router,
    private galleryService: GalleryService) {
  }

  ngOnInit(): void {
  }

  activeGallery() {
    this.imgGallery='';
  }
  nextImg() {
    this.imgGallery='../assets/images/ux_ui/v-life/patient/login_pass_input.png';
    
  }
  
  beforeImg() {
    console.log("anterior imagen");

  }
  routeBack() {    
    this.router.navigateByUrl('works/design/ux-ui')
  }
  

}