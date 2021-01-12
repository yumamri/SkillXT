import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,

} from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  matchs = [];

  // replace with user
  match = 'utilisateur';

  constructor() {}

  ngOnInit(): void {
    this.matchs[0] = this.match;
    this.matchs[1] = this.match;
    this.matchs[2] = this.match;
  }
}
