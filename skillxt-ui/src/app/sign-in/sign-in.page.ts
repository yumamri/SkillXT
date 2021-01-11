import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController} from '@ionic/angular';
import {HttpErrorResponse} from '@angular/common/http';
import {UserDto} from '../api/models/user-dto';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  ionicForm: FormGroup;
  email: string;
  password: string;
  user: UserDto;

  constructor(
      public formBuilder: FormBuilder,
      private userService: UserService,
      public router: Router,
      public alertController: AlertController) {
    this.ionicForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._-]+@[a-z0-9]+.[a-z]{2,3}$')]]
    });
  }


  ngOnInit() {
  }

  get errorControl() {
    return this.ionicForm.controls;
  }
  async onSave() {
    this.userService.loginUser(this.email, this.password).subscribe(() => {
      localStorage.setItem('userMail', this.email);
      this.userLogged();
      this.userService.getUserByEmail(localStorage.getItem('userMail'))
          .subscribe(user => this.user = user,
              error => console.log('error'),
              () => console.log('complete'));
      this.ionicForm.reset();
      this.router.navigate(['/tabs/tab1']);
    });
  }

  private async userLogged() {
    const alert = await this.alertController.create({
      header: 'Succès',
      message: 'Vous êtes connecté !',
    });
    await alert.present();
  }
}
