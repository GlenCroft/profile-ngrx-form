import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ContactDetailsView } from './contact-details/contact-details-view.component';
import { ContactDetailsEdit } from './contact-details/edit/contact-details-edit.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'contact-details',
        component: ContactDetailsEdit
      }
    ])
  ],
  declarations: [
    HomePage,
    ContactDetailsView,
    ContactDetailsEdit
  ]
})
export class HomePageModule {}
