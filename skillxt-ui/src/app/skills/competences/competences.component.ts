import {Component, OnInit} from '@angular/core';
import {SkillDto} from "../../api/models/skill-dto";
import {SkillService} from "../../services/skill.service";
import {chain} from "@angular-devkit/schematics";

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

  constructor(private skillService: SkillService) {
    this.skillService.getSkills().subscribe(skill => this.skills = skill);
  }

  ngOnInit() {
  }

  onChange(skill) {
   if (skill.checked == true) {
     this.check.push(skill);
   } else if (skill.checked == false) {
     this.check.pop();
   }
   console.log(this.check);
  }
}
