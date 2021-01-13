import {Component, OnInit} from '@angular/core';
import {SkillDto} from '../../api/models/skill-dto';
import {SkillService} from '../../services/skill.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss'],
})
export class InterestsComponent implements OnInit {
  skills = [];
  search: string;
  interest = [];
  checkedSkills = [];

  constructor(private skillService: SkillService,
              private userService: UserService) {}

  async ngOnInit() {
    this.interest = await this.getInterest();
    this.skills = await this.getSkills();
    this.interest.forEach(skill => this.checkedSkills.push(skill));
    console.log(this.checkedSkills);
  }

  onChange(skill) {
    if (skill.checked === true) {
      this.userService.addUserInterest(localStorage.getItem('userMail'), skill.title).subscribe();
    } else if (skill.checked === false) {
      this.userService.deleteUserInterest(localStorage.getItem('userMail'), skill.title).subscribe();
    }
  }

  isInArray(skill) {
    return this.interest.findIndex((val) => val.title === skill.title) > -1;
  }
  getInterest() {
    return this.skillService.getUserInterest(localStorage.getItem('userMail')).toPromise();
  }
  getSkills() {
    return this.skillService.getSkills().toPromise();
  }

  onCheck(skill) {
    if (!this.isInArray(skill)) {
      this.checkedSkills.push(skill);
      this.userService.addUserInterest(localStorage.getItem('userMail'), skill.title).subscribe();
    } else {
      const index = this.checkedSkills.findIndex((val) => val.title === skill.title);
      if (index > -1) {
        this.checkedSkills.splice(index, 1);
        this.userService.deleteUserInterest(localStorage.getItem('userMail'), skill.title).subscribe();
      }
    }
    console.log(this.checkedSkills);
  }
}
