import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-skill',
  templateUrl: './bubble-skill.component.html',
  styleUrls: ['./bubble-skill.component.scss'],
})
export class BubbleSkillComponent implements OnInit {
    skill: string;

  constructor() {
    this.skill = 'basketball';
  }

  ngOnInit() {}

}
