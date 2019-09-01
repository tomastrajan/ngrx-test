import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo } from './state/todos.reducer';
import {getAllTodos, getTodosCount} from './state/todos.selectors';
import {addTodo, toggleTodo} from './state/todos.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todosCount: Observable<number>;
  todos: Observable<Todo[]>;
  newTodo: string;

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.todos = this.store.select(getAllTodos);
    this.todosCount = this.store.select(getTodosCount);
  }

  addTodo() {
    this.store.dispatch(addTodo({ name: this.newTodo }));
    this.newTodo = '';
  }

  toggleTodo(name: string) {
    this.store.dispatch(toggleTodo({ name }));
  }
}
