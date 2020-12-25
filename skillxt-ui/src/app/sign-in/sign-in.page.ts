import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController} from '@ionic/angular';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  ionicForm: FormGroup;
  email: string;
  password: string;

  constructor(
      public formBuilder: FormBuilder,
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
  async missingField() {
    const alert = await this.alertController.create({
      header: 'Oups',
      message: 'Un ou plusieurs champs sont manquants ou incomplets.',
    });
    await alert.present();
  }
  async onSave() {
    // // TODO: boolean okay to put dialog somewhere else
    //     this.ionicForm.reset();
    //     error => {
    //     if (error instanceof HttpErrorResponse && error.status === 400) {
    //       this.missingField();
    //   });
    // }

    const alert = await this.alertController.create({
      header: 'Succès',
      message: 'email : ' + this.email + '\n mot de passe : ' + this.password
    });
    await alert.present();
  }
}
