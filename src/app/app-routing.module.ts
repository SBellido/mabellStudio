import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorFourZeroFourComponent } from './errors/error-four-zero-four/error-four-zero-four.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'works',
        loadChildren: () => import('./works/works.module')
          .then(m => m.WorksModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'works/home' 
      },
      {
        path: '**',
        component: ErrorFourZeroFourComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }