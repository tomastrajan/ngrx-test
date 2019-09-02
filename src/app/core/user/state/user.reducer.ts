import { Action, createReducer, on } from '@ngrx/store';

import { User } from './user.model';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

export interface State {
  user: User | null;
  loading: boolean;
  error: Error;
}

export const initialState: State = {
  user: null,
  loading: false,
  error: null
};

const userReducer = createReducer(
  initialState,

  on(UserActions.loadUser, state => ({
    ...state,
    loading: true,
    error: null
  })),

  on(UserActions.loadUserSuccess, (state, { user }) => ({
    ...state,
    loading: false,
    error: null,
    user
  })),

  on(UserActions.loadUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    user: null,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
