import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


/* PrimeNG */
import { MenubarModule } from 'primeng/menubar';

/* Components */
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  exports: [
    NavbarComponent
  ],
  declarations: [ 
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ]
})
export class GlobalModule { }
