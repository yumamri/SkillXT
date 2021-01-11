import {Component, OnInit} from '@angular/core';
import {SkillService} from "../../services/skill.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent implements OnInit {
  skills= [];
  search: string;
  competences= [];

  constructor(
      private skillService: SkillService,
      private userService: UserService) {
  }

  async ngOnInit() {
    this.competences = await this.getCompetences();
    this.skills = await this.getSkills();
  }
  isInArray(value) {
    return this.competences.findIndex((val) => val.title === value.title) > -1
  }
  getCompetences() {
    return this.skillService.getUserCompetence('prenom.nom@gmail.com').toPromise();
  }
  getSkills() {
    return this.skillService.getSkills().toPromise();
  }

  onChange(skill) {
    if (skill.checked == true) {
      this.userService.addUserCompetence('prenom.nom@gmail.com', skill.title).subscribe();
    } else if (skill.checked == false) {
      this.userService.deleteUserCompetence('prenom.nom@gmail.com', skill.title).subscribe();
    }
  }
}
