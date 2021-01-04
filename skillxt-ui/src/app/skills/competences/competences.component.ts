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
  check= [];
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
     this.check.push(skill.title);
   } else if (skill.checked == false) {
     this.check.pop();
   }
   console.log(this.check);
  }

  function(){
    this.userService.addUserCompetence('s@s.ss', 'Cuisine');
  }
}
