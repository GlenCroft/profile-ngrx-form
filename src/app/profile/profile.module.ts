import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { ContactDetailsReducer } from './contact-details/store/contact-details.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContactDetailsEffects } from './contact-details/store/contact-details.effects';

import { ProfilePage } from './profile.page';
import { ContactDetailsView } from './contact-details/contact-details-view.component';
import { ContactDetailsEdit } from './contact-details/edit/contact-details-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ ContactDetails: ContactDetailsReducer }),
    EffectsModule.forRoot([ContactDetailsEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: ProfilePage
      },
      {
        path: 'contact-details',
        component: ContactDetailsEdit
      }
    ])
  ],
  declarations: [
    ProfilePage,
    ContactDetailsView,
    ContactDetailsEdit
  ]
})
export class ContactDetailsModule {}
