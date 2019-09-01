import { Action, createReducer, on } from '@ngrx/store';

import * as todosActions from './todos.actions';

export const FEATURE_NAME = 'todos';

const initialState: Todo[] = [];

const todosReducerFn = createReducer(
  initialState,
  on(todosActions.addTodo, (state, { name }) => [
    ...state,
    { name, done: false }
  ]),
  on(todosActions.removeTodo, (state, { name }) =>
    state.filter(todo => todo.name !== name)
  ),
  on(todosActions.toggleTodo, (state, { name }) => {
    const foundTodo = state.find(todo => todo.name === name);
    const otherTodos = state.filter(todo => todo.name !== name);
    return [...otherTodos, { name: foundTodo.name, done: !foundTodo.done }];
  })
);

export function reducer(state: Todo[], action: Action) {
  return todosReducerFn(state, action);
}

export interface Todo {
  name: string;
  done: boolean;
}
