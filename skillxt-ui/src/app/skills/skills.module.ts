import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillsPageRoutingModule } from './skills-routing.module';

import { SkillsPage } from './skills.page';
import {InterestsComponent} from './interests/interests.component';
import {CompetencesComponent} from './competences/competences.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SkillsPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [SkillsPage, InterestsComponent, CompetencesComponent]
})
export class SkillsPageModule {}
