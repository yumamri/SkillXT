import {Component, OnInit} from '@angular/core';
import {SkillDto} from "../../api/models/skill-dto";
import {SkillService} from "../../services/skill.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent implements OnInit {
  skills= [];
  skill: SkillDto;
  search: string;

  constructor(
      private skillService: SkillService,
      private userService: UserService) {
    this.skillService.getSkills().subscribe(skill => this.skills = skill);
  }

  ngOnInit() {
  }

  onChange(skill) {
   if (skill.checked == true) {
     this.userService.addUserCompetence('prenom.nom@gmail.com', skill.title).subscribe();
   } else if (skill.checked == false) {
     this.userService.deleteUserCompetence('prenom.nom@gmail.com', skill.title).subscribe();
   }
  }

  isUserCompetence(skill) {
    this.userService.isUserCompetence('prenom.nom@gmail.com', skill.title).subscribe();
  }
}
