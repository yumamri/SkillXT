import {Component, OnInit} from '@angular/core';
import {UserDto} from '../api/models/user-dto';
import {UserService} from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-me',
  templateUrl: 'me.page.html',
  styleUrls: ['me.page.scss']
})
export class MePage implements OnInit {

  name= 'name';
  family= "family";
  ville = 'ville';
  country= "country";
  propos = 'A propos ...';
  user: UserDto;

  constructor(
      private userService: UserService,
      private route: ActivatedRoute
  ) {}

    ngOnInit() {
      this.getUser();
 }
    getUser(): void {
      const email = this.route.snapshot.paramMap.get('a@a.aa');
      this.userService.getUserByEmail(email)
          .subscribe(user => console.log(user));
    }
}
