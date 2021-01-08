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
  about = 'A propos ...';
  user: UserDto;

  family: string | undefined;
  name: string | undefined;
  country: string | undefined;
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
    this.userService.getUserByEmail('prenom.nom@gmail.com')
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

    console.log(this.family);
    console.log(this.name);
    console.log(this.country);


  }
}
