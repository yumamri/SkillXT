import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserDto} from '../api/models/user-dto';
import {UserService} from '../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ConfirmedValidator} from './confirmed.validator';
import {AlertController} from '@ionic/angular';
import {CountryService} from '../services/country.service';
import {Observable} from 'rxjs';
import {Country} from '../api/models/country';
import {HttpErrorResponse} from '@angular/common/http';

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
  confirmPassword: string;
  country: string;
  countries: Observable<Country[]>;

  title = 'Créer un compte';

  constructor(
      private userService: UserService,
      private countryService: CountryService,
      public formBuilder: FormBuilder,
      public alertController: AlertController) {
    this.ionicForm = this.formBuilder.group({
          family: ['', [Validators.required]],
          name: ['', [Validators.required]],
          country: [''],
          password: ['', [Validators.required]],
          confirmPassword: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.pattern('[a-z0-9._-]+@[a-z0-9]+.[a-z]{2,3}$')]]
        }, {
          validator: ConfirmedValidator('password', 'confirmPassword')
        });
  }

  ngOnInit() {
    this.countries = this.countryService.getAllCountries();
    this.country = 'France';
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  async userCreated() {
    const alert = await this.alertController.create({
      header: 'Succès',
      message: 'Votre compte est bien enregistré !',
    });
    await alert.present();
  }
  async badEmailFormat() {
    const alert = await this.alertController.create({
      header: 'Oups',
      message: 'Format du mail incorrect.',
    });
    await alert.present();
  }
  async missingField() {
    const alert = await this.alertController.create({
      header: 'Oups',
      message: 'Un ou plusieurs champs sont manquants ou incomplets.',
    });
    await alert.present();
  }
  async userExist() {
    const alert = await this.alertController.create({
      header: 'Attention',
      message: 'Cet utilisateur existe déjà.',
    });
    await alert.present();
  }

  async onSave() {
    if (this.confirmPassword !== this.password) {
      const alert = await this.alertController.create({
        header: 'Attention',
        message: 'Les mots de passe doivent être identique.',
      });
      await alert.present();
    } else {
      const user: UserDto = {
        name: this.name,
        family: this.family,
        email: this.email,
        password: this.password,
        country: this.country,
      };
      this.userService.addUser(user).subscribe(() => {
        // TODO: boolean okay to put dialog somewhere else
        this.userCreated();
        this.ionicForm.reset();
      }, error => {
        if (error instanceof HttpErrorResponse && error.status === 412) {
          this.badEmailFormat();
        } else if (error instanceof HttpErrorResponse && error.status === 400) {
          this.missingField();
        } else if (error instanceof HttpErrorResponse && error.status === 409) {
          this.userExist();
        }
      });
    }
  }
}
