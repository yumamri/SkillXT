import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {SkillDto} from "../../api/models/skill-dto";
import {SkillService} from "../../services/skill.service";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent implements OnInit {
  skill: SkillDto;
  skills: Observable<SkillDto[]>;
  search: string;

  constructor(private skillService: SkillService) {
    this.skills = this.skillService.getSkills();
  }


  ngOnInit() {
    //this.skills.subscribe(skill => console.log(skill));
  }

  getSkillsByTitle(title: String) {
    this.skills.pipe(map(skills => skills.filter(skill => skill.title === title)));
    this.skills.subscribe(skill => console.log(skill));
    return this.skills;
  }
}
