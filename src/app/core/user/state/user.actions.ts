import { createAction, props } from '@ngrx/store';

import { User } from './user.model';

export const loadUser = createAction('[User] Load User');

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: User }>()
);

export const loadUserFailure = createAction(
  '[User] Load User Failure',
  props<{ error: Error }>()
);

export const mutateUser = createAction('[User] Mutate user (bad!)');
