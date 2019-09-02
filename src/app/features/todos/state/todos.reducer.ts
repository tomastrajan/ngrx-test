import { Action, createReducer, on } from '@ngrx/store';

import * as TodosActions from './todos.actions';

export const todosFeatureKey = 'todos';

export interface State {
  items: {
    [name: string]: Todo;
  };
}

const initialState: State = {
  items: {}
};

const todosReducer = createReducer(
  initialState,

  on(TodosActions.addTodo, (state, { name }) => ({
    items: {
      ...state.items,
      [name]: { name, done: false }
    }
  })),

  on(TodosActions.removeTodo, (state, { name }) => {
    const newState = {
      items: {
        ...state.items
      }
    };
    delete newState.items[name];
    return newState;
  }),

  on(TodosActions.toggleTodo, (state, { name }) => ({
    items: {
      ...state.items,
      [name]: { name, done: !state.items[name].done }
    }
  })),

  on(TodosActions.deleteDoneTodos, state => {
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
  return todosReducer(state, action);
}

export interface Todo {
  name: string;
  done: boolean;
}
