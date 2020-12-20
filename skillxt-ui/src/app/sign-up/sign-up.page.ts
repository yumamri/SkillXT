import { Component, OnInit } from '@angular/core';
import {UserDto} from "../api/models/user-dto";
import {UserService} from "../services/user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  ionicForm: FormGroup;
  name: string;
  family: string;
  email: string;
  password: string;

  title = 'Créer un compte';

  constructor(private userService: UserService, public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]]
    })
  }
  get errorControl() {
    return this.ionicForm.controls;
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
