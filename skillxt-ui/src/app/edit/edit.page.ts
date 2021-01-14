import { Component, OnInit } from '@angular/core';
import {UserDto} from '../api/models/user-dto';
import {UserService} from '../services/user.service';
import {CountryService} from '../services/country.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  user: UserDto;

  family: string;
  name: string;
  country: string;
  about: string;
  countries: string[];

  constructor(
      private userService: UserService,
      private countryService: CountryService
  ) {}

  ngOnInit() {
    this.getUser();
    this.countries = this.countryService.getCountry();

  }
  getUser() {
    this.userService.getUserByEmail(localStorage.getItem('userMail'))
        .subscribe(user => this.user = user,
            error => console.log('error'),
            () => console.log('complete'));
  }

  onEdit() {
    if (this.family !== undefined) {
      this.user.family = this.family;
    } else {
      this.family = this.user.family;
    }
    if (this.name !== undefined) {
      this.user.name = this.name;
    } else {
      this.name = this.user.name;
    }
    if (this.country !== undefined) {
      this.user.country = this.country;
    } else {
      this.country = this.user.country;
    }
    if (this.about !== undefined) {
      this.user.about = this.about;
    } else {
      this.about = this.user.about;
    }
    this.userService.updateUser(this.name, this.family, this.country, this.about, this.user).subscribe();
  }
}
