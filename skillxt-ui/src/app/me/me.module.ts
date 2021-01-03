import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MePage } from './me.page';
import { MePageRoutingModule } from './me-routing.module';
import {BubbleSkillComponent} from './bubble-skill/bubble-skill.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: MePage }]),
    MePageRoutingModule,
  ],
  declarations: [MePage, BubbleSkillComponent]
})
export class MePageModule {}
