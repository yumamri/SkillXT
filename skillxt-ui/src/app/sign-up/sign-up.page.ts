import { Component, OnInit } from '@angular/core';
import {UserDto} from '../api/models/user-dto';
import {UserService} from '../services/user.service';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  name: string;
  family: string;
  email: string;
  password: string;

  title = 'Créer un compte';

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    family: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password: new FormControl('', [Validators.required])
  });

  get name(){
    return this.userForm.get('name');
  }
  get family(){
    return this.userForm.get('family');
  }
  get email(){
    return this.userForm.get('email');
  }
  get password(){
    return this.userForm.get('password');
  }

  ngOnInit() {
  }

  onSave() {
    const user: UserDto = {
      name: this.name,
      family: this.family,
      email: this.email,
      password: this.password,
      country: 'France'
    };
    this.userService.addUser(user).subscribe(() => {
    // TODO: boolean okay to put dialog somewhere else
    });
  }
}
