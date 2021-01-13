import {Component, ElementRef, OnInit, Renderer2, ViewChild, } from '@angular/core';
import {UserDto} from '../api/models/user-dto';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  matchs = [];

  // replace with user
  match = 'utilisateur';

  user: UserDto;

  constructor(private userService: UserService, ) {}

  async ngOnInit() {
    if (localStorage.getItem('userMail') !== null) {
      this.getUser();
      this.matchs = await this.getMatchs();
      console.log(this.matchs);
    }
  }

  getMatchs() {
    return this.userService.getUserMatch(localStorage.getItem('userMail')).toPromise();
  }

  getUser() {
    this.userService.getUserByEmail(localStorage.getItem('userMail'))
        .subscribe(user => this.user = user,
            error => console.log('error'),
            () => console.log('complete'));
  }

  refresh(): void {
    window.location.reload();
  }
}
