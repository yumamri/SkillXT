import {Component, OnInit} from '@angular/core';
import {UserDto} from '../api/models/user-dto';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-me',
  templateUrl: 'me.page.html',
  styleUrls: ['me.page.scss']
})
export class MePage implements OnInit {
  ville = 'ville';
  propos = 'A propos ...';
  user: UserDto;

  constructor(
      private userService: UserService,
  ) {}

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.userService.getUserByEmail('a@a.aa')
        .subscribe(user => this.user = user,
            error=> console.log('error'),
            () => console.log('complete'));
  }
}
