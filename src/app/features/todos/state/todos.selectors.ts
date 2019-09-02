import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FEATURE_NAME, State } from './todos.reducer';

const getTodos = createFeatureSelector<State>(FEATURE_NAME);

export const getAllTodos = createSelector(
  getTodos,
  todos => Object.values(todos.items)
);
export const getDoneTodos = createSelector(
  getAllTodos,
  todos => todos.filter(todo => todo.done)
);
export const getTodosCount = createSelector(
  getAllTodos,
  todos => todos.length
);
