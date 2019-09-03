import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { from, Observable } from 'rxjs';

import * as fromUser from './core/user/user.module';
import { take } from 'rxjs/operators';

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

  mutateUser() {
    this.store.dispatch(fromUser.mutateUser());
  }
}
