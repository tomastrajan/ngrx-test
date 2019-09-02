import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromTodos from './state';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todosCount: Observable<number>;
  todos: Observable<fromTodos.Todo[]>;
  newTodo: string;

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.todos = this.store.select(fromTodos.getAllTodos);
    this.todosCount = this.store.select(fromTodos.getTodosCount);
  }

  addTodo() {
    this.store.dispatch(fromTodos.addTodo({ name: this.newTodo }));
    this.newTodo = '';
  }

  toggleTodo(name: string) {
    this.store.dispatch(fromTodos.toggleTodo({ name }));
  }

  deleteDoneTodos() {
    this.store.dispatch(fromTodos.deleteDoneTodos());
  }
}
