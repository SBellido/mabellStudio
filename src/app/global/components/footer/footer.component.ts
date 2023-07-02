import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  designActive:boolean = false;
  developmentActive:boolean = false;
  marketingActive:boolean = false;
  biographyActive:boolean = false;

  constructor(private router: Router) { 
  }

  ngOnInit() {
   
  }


  public setButtonsStyle(item: string) {
    
    if (item === 'design') {
      this.designActive = true;
      this.developmentActive = false; 
      this.marketingActive = false; 
      this.biographyActive = false; 
      this.router.navigate(['works/design']);
    } else if (item === 'development') {
        this.developmentActive = true;
        this.designActive = false; 
        this.marketingActive = false; 
        this.biographyActive = false; 
        this.router.navigate(['works/development']);
    } else if (item === 'marketing') {
        this.marketingActive = true; 
        this.designActive = false; 
        this.developmentActive = false; 
        this.biographyActive = false;       
        this.router.navigate(['works/marketing']);
    } else if (item === 'biography') {
        this.biographyActive = true; 
        this.designActive = false; 
        this.developmentActive = false; 
        this.marketingActive = false; 
        this.router.navigate(['works/biography']);
    } else {
        this.designActive = false; 
        this.developmentActive = false; 
        this.marketingActive = false; 
        this.biographyActive = false;
        this.router.navigate(['works/home']);
    }
  }

}
