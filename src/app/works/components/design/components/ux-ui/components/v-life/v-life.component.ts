import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-v-life',
  templateUrl: './v-life.component.html',
  styleUrls: ['./v-life.component.scss']
})
export class VLifeComponent implements OnInit {

  imgGallery:string = '';
  images:string[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activeGallery();
  }

  activeGallery() {
    this.imgGallery='../assets/images/ux_ui/v-life/patient/start.png';
  }
  nextImage() {
    
  }
  routeBack() {    
    this.router.navigateByUrl('works/design/ux-ui')
  }
  

}
