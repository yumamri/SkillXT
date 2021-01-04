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
  skill: SkillDto;
  search: string;

  constructor(private skillService: SkillService,
              private userService: UserService) {
    this.skillService.getSkills().subscribe(skill => this.skills = skill);
  }

  ngOnInit() {

  }

  onChange(skill) {
    if (skill.checked === true) {
      this.userService.addUserCompetence('s@s.ss', skill.title).subscribe();
    } else if (skill.checked === false) {
      this.userService.deleteUserCompetence('s@s.ss', skill.title).subscribe();
    }
  }
}
