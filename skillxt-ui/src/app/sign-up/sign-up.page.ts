import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserDto} from "../api/models/user-dto";
import {UserService} from "../services/user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {ConfirmedValidator} from "./confirmed.validator";
import {AlertController} from "@ionic/angular";
import {CountryService} from "../services/country.service";
import {Observable} from "rxjs";
import {Country} from "../api/models/country";

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
  country: string;
  countries : Observable<Country[]>;

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
    this.country = "France";
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'User has been created with the email',
    });
    await alert.present();
  }
  onSave() {
    let user: UserDto = {
      name: this.name,
      family: this.family,
      email: this.email,
      password: this.password,
      country: this.country,
    }
    this.userService.addUser(user).subscribe(()=>{
      // TODO: boolean okay to put dialog somewhere else
      this.presentAlert();
    })
  }
}
