import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromUser from '../../core/user/user.module';
import * as fromRouter from '../../core/router/router.module';

import * as fromTodos from './state';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  user: Observable<fromUser.User>;
  todosCount: Observable<number>;
  todos: Observable<fromTodos.Todo[]>;
  filter: Observable<any>;
  newTodo: string;

  constructor(private store: Store<{}>) {}

  ngOnInit() {
    this.todos = this.store.select(fromTodos.getAllTodos);
    this.todosCount = this.store.select(fromTodos.getTodosCount(), { multiply: 2 });
    this.user = this.store.select(fromUser.getUser);
    this.filter = this.store.select(fromRouter.selectFilter);
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
