import {Component, OnInit} from '@angular/core';
import {SkillDto} from '../../api/models/skill-dto';
import {SkillService} from '../../services/skill.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent implements OnInit {
  skills = [];
  skill: SkillDto;
  search: string;
  test: boolean;

  constructor(
      private skillService: SkillService,
      private userService: UserService) {
  }

  ngOnInit() {
    this.skillService.getSkills().subscribe(skill => this.skills = skill);
  }

  onChange(skill) {
    if (skill.checked == true) {
      this.userService.addUserCompetence(localStorage.getItem('userMail'), skill.title).subscribe();
    } else if (skill.checked == false) {
      this.userService.deleteUserCompetence(localStorage.getItem('userMail'), skill.title).subscribe();
    }
  }

  isCompetence(skill) {
    this.userService.isUserCompetence(localStorage.getItem('userMail'), skill.title).subscribe(next => this.test = next);
    if (this.test == true) {
      skill.checked = true;
    } else {
      skill.checked = false;
    }
  }
}
