import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  deleteLocalStorage() {
    localStorage.removeItem('userMail');
    this.router.navigate(['/tabs/tab1']);
  }
}
