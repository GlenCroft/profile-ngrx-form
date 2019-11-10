import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ExperiencePage } from './experience.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExperiencePage
      }
    ])
  ],
  declarations: [ExperiencePage]
})
export class ExperiencePageModule {}
