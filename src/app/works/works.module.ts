/* Angular */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { GlobalModule }  from '../global/global.module';
import { WorksRoutingModule } from './works-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule, ModalModule, WavesModule } from 'angular-bootstrap-md';

/* Components */
import { WorksComponent } from './works.component';
import { HomeComponent } from './components/home/home.component';
import { DesignComponent } from './components/design/design.component';
import { DevelopmentComponent } from './components/development/development.component';
import { CardComponent } from './components/card.component';
import { MarketingComponent } from './components/marketing/marketing.component';

@NgModule({
  declarations: [
    WorksComponent,
    HomeComponent,
    DesignComponent,
    DevelopmentComponent,
    CardComponent,
    MarketingComponent,
  ],
  imports: [
    CommonModule,
    GlobalModule,
    WorksRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MDBBootstrapModule,
    CarouselModule, 
    ModalModule, 
    WavesModule
  ]
})
export class WorksModule { }
