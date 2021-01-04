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

  family: string;
  name: string;

  country: string;
  countries: string[];

  constructor(
      private userService: UserService,
      private countryService: CountryService
  ) {}

  ngOnInit() {
    this.getUser();
    this.countries = this.countryService.getCountry();
    // this.country = 'France';
  }
  getUser() {
    this.userService.getUserByEmail('prenom.nom@gmail.com')
        .subscribe(user => this.user = user,
            error => console.log('error'),
            () => console.log('complete'));
  }

  onEdit() {
    console.log(this.name);
    console.log(this.family);
    console.log(this.country);
  }
}
