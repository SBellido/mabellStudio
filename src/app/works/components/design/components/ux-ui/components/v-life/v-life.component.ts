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
  activeNext:boolean = false;
  activeBefore:boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activeGallery();
  }

  activeGallery() {
    this.imgGallery='../assets/images/ux_ui/v-life/patient/start.png';
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
