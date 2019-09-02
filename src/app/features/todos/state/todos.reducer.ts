import { Action, createReducer, on } from '@ngrx/store';

import * as todosActions from './todos.actions';

export const FEATURE_NAME = 'todos';

const initialState: State = {
  items: {}
};

const todosReducerFn = createReducer(
  initialState,
  on(todosActions.addTodo, (state, { name }) => ({
    items: {
      ...state.items,
      [name]: { name, done: false }
    }
  })),
  on(todosActions.removeTodo, (state, { name }) => {
    const newState = {
      items: {
        ...state.items
      }
    };
    delete newState.items[name];
    return newState;
  }),
  on(todosActions.toggleTodo, (state, { name }) => ({
    items: {
      ...state.items,
      [name]: { name, done: !state.items[name].done }
    }
  })),
  on(todosActions.deleteDoneTodos, state => {
    const notDoneNames = Object.values(state.items)
      .filter(item => !item.done)
      .map(item => item.name);
    return {
      items: notDoneNames.reduce((result, name) => {
        result[name] = state.items[name];
        return result;
      }, {})
    };
  })
);

export function reducer(state: State | undefined, action: Action) {
  return todosReducerFn(state, action);
}

export interface State {
  items: {
    [name: string]: Todo;
  };
}

export interface Todo {
  name: string;
  done: boolean;
}
