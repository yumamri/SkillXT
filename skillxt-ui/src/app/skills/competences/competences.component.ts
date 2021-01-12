import {Component, OnInit} from '@angular/core';
import {SkillService} from '../../services/skill.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.scss'],
})
export class CompetencesComponent implements OnInit {
  skills = [];
  search: string;
  competences = [];
  checkedSkills = [];

  constructor(
      private skillService: SkillService,
      private userService: UserService) {
  }

  async ngOnInit() {
    this.competences = await this.getCompetences();
    this.skills = await this.getSkills();
    this.competences.forEach(skill => this.checkedSkills.push(skill));
    console.log(this.checkedSkills);
  }
  isInArray(skill) {
    return this.competences.findIndex((val) => val.title === skill.title) > -1;
  }
  getCompetences() {
    return this.skillService.getUserCompetence(localStorage.getItem('userMail')).toPromise();
  }
  getSkills() {
    return this.skillService.getSkills().toPromise();
  }

  onCheck(skill) {
    if (!this.isInArray(skill)) {
      this.checkedSkills.push(skill);
      this.userService.addUserCompetence(localStorage.getItem('userMail'), skill.title).subscribe();
    } else {
      const index = this.checkedSkills.findIndex((val) => val.title === skill.title);
      if (index > -1) {
        this.checkedSkills.splice(index, 1);
        this.userService.deleteUserCompetence(localStorage.getItem('userMail'), skill.title).subscribe();
      }
    }
    console.log(this.checkedSkills);
  }
}
