import { Component } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: 'me.page.html',
  styleUrls: ['me.page.scss']
})
export class MePage {

  name = 'prénom';
  family = 'NOM';
  ville = 'ville';
  pays = 'pays';
  propos = 'A propos ...';

  constructor() {}

}
