import { createFeatureSelector, createSelector } from '@ngrx/store';

import { todosFeatureKey, State } from './todos.reducer';

const getTodos = createFeatureSelector<State>(todosFeatureKey);

export const getAllTodos = createSelector(
  getTodos,
  todos => Object.values(todos.items)
);
export const getDoneTodos = createSelector(
  getAllTodos,
  todos => todos.filter(todo => todo.done)
);
export const getTodosCount = () => createSelector(
  getAllTodos,
  (todos, props: { multiply?: number } = {}) => todos.length * (props.multiply || 1)
);
