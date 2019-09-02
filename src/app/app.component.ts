import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromUser from './core/user/user.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  username: Observable<string>;

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.username = this.store.select(fromUser.getUsername);
  }

}
