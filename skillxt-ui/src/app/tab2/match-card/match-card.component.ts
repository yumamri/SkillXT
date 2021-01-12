import { Component, OnInit } from '@angular/core';
import {UserDto} from '../../api/models/user-dto';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.scss'],
})
export class MatchCardComponent implements OnInit {

  user: UserDto;

  constructor(
      private userService: UserService,
  ) {}

  ngOnInit() {
    if (localStorage.getItem('userMail') !== null) {
      this.getUser();
    }
  }

  getUser() {
    this.userService.getUserByEmail(localStorage.getItem('userMail'))
        .subscribe(user => this.user = user,
            error => console.log('error'),
            () => console.log('complete'));
  }

}
