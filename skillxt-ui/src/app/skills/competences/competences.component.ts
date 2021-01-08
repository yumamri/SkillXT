import {Component, OnInit} from '@angular/core';
import {SkillDto} from "../../api/models/skill-dto";
import {SkillService} from "../../services/skill.service";
import {UserService} from "../../services/user.service";
import {forEach} from "@angular-devkit/schematics";
import {element} from "protractor";

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent implements OnInit {
  skills= [];
  skill: SkillDto;
  search: string;
  competence= [];

  constructor(
      private skillService: SkillService,
      private userService: UserService) {
  }

  ngOnInit() {
    this.skillService.getSkills().subscribe(skill => this.skills = skill);
    this.skillService.getUserCompetence('prenom.nom@gmail.com').subscribe(comm => console.log(comm));
  }

  onChange(skill) {
    if (skill.checked == true) {
      this.userService.addUserCompetence('prenom.nom@gmail.com', skill.title).subscribe();
    } else if (skill.checked == false) {
      this.userService.deleteUserCompetence('prenom.nom@gmail.com', skill.title).subscribe();
    }
  }
}
