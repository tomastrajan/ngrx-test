import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todos] add todo',
  props<{ name: string }>()
);

export const removeTodo = createAction(
  '[Todos] remove todo',
  props<{ name: string }>()
);

export const toggleTodo = createAction(
  '[Todos] toggle todo',
  props<{ name: string }>()
);

export const deleteDoneTodos = createAction('[Todos] delete done');
