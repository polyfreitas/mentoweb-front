import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NgCalendarModule } from 'ionic2-calendar';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    NgCalendarModule,
  ],
  declarations: [Tab1Page, ModalComponent]
})
export class Tab1PageModule {}