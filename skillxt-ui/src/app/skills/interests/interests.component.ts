import {Component, OnInit} from '@angular/core';
import {SkillDto} from "../../api/models/skill-dto";
import {SkillService} from "../../services/skill.service";

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
})
export class InterestsComponent implements OnInit {
  skills= [];
  skill: SkillDto;
  search: string;

  constructor(private skillService: SkillService) {
    this.skillService.getSkills().subscribe(skill => this.skills = skill);
  }

  ngOnInit() {

  }
}
