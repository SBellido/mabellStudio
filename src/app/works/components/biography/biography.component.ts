import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.scss']
})
export class BiographyComponent implements OnInit {

  visibleLabor: boolean = false;
  visibleAcademic: boolean = false;
  
  constructor(private router: Router) { }

  ngOnInit(): void {  
    this.topFunction();
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  showMoreLabor() {  
    this.visibleLabor ? 
      this.visibleLabor = false : 
        this.visibleLabor = true,
        this.visibleAcademic = false; 
  }

  showMoreAcademic() {
    this.visibleAcademic ? 
      this.visibleAcademic = false : 
        this.visibleAcademic = true,
        this.visibleLabor = false;
  }

}
