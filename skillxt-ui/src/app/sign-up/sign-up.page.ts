import { Component, OnInit } from '@angular/core';
import {UserDto} from "../api/models/user-dto";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  name: string;
  family: string;
  email: string;
  password: string;

  title = 'Créer un compte';

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSave() {
    let user: UserDto = {
      name: this.name,
      family: this.family,
      email: this.email,
      password: this.password,
      country: "France"
    }
    this.userService.addUser(user).subscribe(()=>{
    // TODO: boolean okay to put dialog somewhere else
    })
  }
}
