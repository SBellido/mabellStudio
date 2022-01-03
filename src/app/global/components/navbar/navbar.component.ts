/* Angular */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/* Primeng */
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Ilustración',
        items: [
          {
            label: 'Retratos', 
            icon: 'pi pi-fw pi-plus',
            routerLink: 'portrait'
          },
          {
            label: 'Experimental', 
            icon: 'pi pi-fw pi-list',
            routerLink: 'experimental'
          },
          {
            label: 'Bocetos', 
            icon: 'pi pi-fw pi-list',
            routerLink: 'sketch'
          },
        ]
      },
      {
        label: 'Diseño',
        items: [
          {
            label: 'Gráfico', 
            icon: 'pi pi-fw pi-plus',
            routerLink: 'graphic'
          },
          {
            label: 'Interacción', 
            icon: 'pi pi-fw pi-list',
            routerLink: 'interaction'
          }
        ]
      },
      {
        label: 'Intervención',
        items: [
          {
            label: 'Body Paint', 
            icon: 'pi pi-fw pi-plus',
            routerLink: 'body-paint'
          },
          {
            label: 'Pública', 
            icon: 'pi pi-fw pi-list',
            routerLink: 'public'
          }
        ]
      }
    ];
  }

}
