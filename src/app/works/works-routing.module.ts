/* Angular */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components*/
import { HomeComponent } from './components/home/home.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { WorksComponent } from './works.component';
import { DesignComponent } from './components/design/design.component';
import { DevelopmentComponent } from './components/development/development.component';

const routes: Routes = [
  {
    path: '',
    component: WorksComponent,
    children: [     
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'design',
        component: DesignComponent
      },
      {
        path: 'development',
        component: DevelopmentComponent
      },
      {
        path: 'marketing',
        component: MarketingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WorksRoutingModule { }
