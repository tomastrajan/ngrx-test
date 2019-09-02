import { createFeatureSelector, createSelector } from '@ngrx/store';

import { userFeatureKey, State } from './user.reducer';

const getUserFeature = createFeatureSelector<State>(userFeatureKey);

export const getUser = createSelector(
  getUserFeature,
  user => user.user
);

export const getUsername = createSelector(
  getUserFeature,
  user => user && user.user && user.user.username
);
