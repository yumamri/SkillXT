import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage implements OnInit {
  show = true;
  btnStyleComp = 'selectedA';
  btnStyleInt = 'unselectedA';
  title = 'Ajouter Compétences';

  constructor() { }

  ngOnInit() {
  }

  dispComp() {
    this.show = true;
    this.btnStyleComp = 'selectedA';
    this.btnStyleInt = 'unselectedA';
    this.title = 'Ajouter Compétences';
  }

  dispInt() {
    this.show = false;
    this.btnStyleInt = 'selectedA';
    this.btnStyleComp = 'unselectedA';
    this.title = 'Ajouter Intérêts';
  }
}
