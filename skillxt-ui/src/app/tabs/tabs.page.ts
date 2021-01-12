import {Component, OnInit} from '@angular/core';
import {UserDto} from '../api/models/user-dto';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage  implements OnInit{
  user: UserDto;

  constructor(
      private userService: UserService,
  ) {}

  display(){
    return localStorage.getItem('userMail') != null;
  }

  ngOnInit(): void {
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
