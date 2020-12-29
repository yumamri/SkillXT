import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {SkillDto} from "../../api/models/skill-dto";
import {SkillService} from "../../services/skill.service";

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent implements OnInit {
  skill: SkillDto;
  skills: Observable<SkillDto[]>;
  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skills = this.skillService.getSkills();
    this.skillService.getSkills().subscribe(skill => console.log(skill))
  }

}
