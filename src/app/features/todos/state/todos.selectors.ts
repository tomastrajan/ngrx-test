import {createFeatureSelector, createSelector} from '@ngrx/store';

const getTodos = createFeatureSelector<any>('todos');

export const getAllTodos = createSelector(getTodos, todos => todos);
export const getDoneTodos = createSelector(getAllTodos, todos => todos.filter(todo => todo.done));
export const getTodosCount = createSelector(getAllTodos, todos => todos.length);
