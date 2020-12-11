import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {SettingsPage} from '../settings/settings';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {

  }

  public onGoToSettings(){
    return this.router.navigateByUrl('SettingsPage');
  }

}
