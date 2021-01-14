import {Component, OnInit} from '@angular/core';
import {UserDto} from '../api/models/user-dto';
import {UserService} from '../services/user.service';
import {SkillService} from '../services/skill.service';
import {SkillDto} from '../api/models/skill-dto';

@Component({
  selector: 'app-me',
  templateUrl: 'me.page.html',
  styleUrls: ['me.page.scss']
})
export class MePage implements OnInit {
  propos = 'A propos ...';
  user: UserDto;
  competences = [];
  interests = [];
  competenceA: SkillDto;
  competenceB: SkillDto;
  competenceC: SkillDto;
  interestA: SkillDto;
  interestB: SkillDto;
  interestC: SkillDto;

  constructor(
      private userService: UserService,
      private skillService: SkillService
  ) {}

  async ngOnInit() {
    this.competences = await this.getCompetences();
    this.interests = await this.getInterests();
    this.getUser();
    this.competenceA = this.getRandomCompetence();
    this.checkCompetence();
    this.interestA = this.getRandomInterest();
    this.checkInterest();
}
  checkCompetence() {
    if (this.competences.length > 1) {
      this.getCompetenceB();
      this.getCompetenceC();
    } else {
      this.competenceB = this.competenceA;
      this.competenceC = this.competenceA;
    }
  }
  checkInterest() {
    if (this.interests.length > 1) {
      this.getInterestB();
      this.getInterestC();
    } else {
      this.interestB = this.interestA;
      this.interestC = this.interestA;
    }
  }
  getCompetenceB() {
    this.competenceB = this.getRandomCompetence();
    while (this.competenceB == this.competenceA) {
      this.competenceB = this.getRandomCompetence();
    }
  }
  getCompetenceC() {
    this.competenceC = this.getRandomCompetence();
    while (this.competenceC == (this.competenceA || this.competenceB)) {
      this.competenceC = this.getRandomCompetence();
    }
  }
  getInterestB() {
    this.interestB = this.getRandomInterest();
    while (this.interestB == this.interestA) {
      this.interestB = this.getRandomInterest();
    }
  }
  getInterestC() {
    this.interestC = this.getRandomInterest();
    while (this.interestC == (this.interestA || this.interestB)) {
      this.interestC = this.getRandomInterest();
    }
  }
  getCompetences() {
    return this.skillService.getUserCompetence(localStorage.getItem('userMail')).toPromise();
  }
  getInterests() {
    return this.skillService.getUserInterest(localStorage.getItem('userMail')).toPromise();
  }
  getRandomInterest(): any {
    return this.interests[Math.floor(Math.random() * this.interests.length)];
  }
  getRandomCompetence(): any {
    return this.competences[Math.floor(Math.random() * this.competences.length)];
  }
  getUser() {
    this.userService.getUserByEmail(localStorage.getItem('userMail'))
        .subscribe(user => this.user = user,
            error => console.log('error'),
            () => console.log('complete'));
  }
}
