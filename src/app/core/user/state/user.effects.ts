import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, delay } from 'rxjs/operators';
import { of } from 'rxjs';

import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      concatMap(() =>
        of({ username: 'demo-user', roles: [] }).pipe(
          delay(1000 + Math.random() * 5000),
          map(user => UserActions.loadUserSuccess({ user })),
          catchError(error => of(UserActions.loadUserFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}
