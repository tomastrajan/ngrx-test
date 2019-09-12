import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MemoizedSelector, Store } from '@ngrx/store';

import { TodosComponent } from './todos.component';
import { getAllTodos, getTodosCount, Todo } from './state';

fdescribe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let mockStore: MockStore<{}>;
  let mockSelectorGetAllTodos: MemoizedSelector<{}, Todo[]>;
  let mockSelectorGetTodosCount: MemoizedSelector<{}, number>;

  const getTodoItems = () => fixture.debugElement.queryAll(By.css('li'));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [provideMockStore()],
      declarations: [TodosComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    mockStore = TestBed.get<Store<{}>>(Store);
    mockSelectorGetAllTodos = mockStore.overrideSelector(getAllTodos, [
      { name: 'aaa', done: false }
    ]);
    mockSelectorGetTodosCount = mockStore.overrideSelector(getTodosCount(), 1);

    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    fixture.debugElement.query(By.css('li'));
  });

  it('should render todo items', () => {
    expect(getTodoItems().length).toBe(1);
    expect(getTodoItems()[0].nativeElement.textContent.trim()).toBe('aaa');
  });

  it('should render todo items', done => {
    mockSelectorGetAllTodos.setResult([{ name: 'bbb', done: true }]);
    mockStore.setState({ dummy: true });

    fixture.detectChanges();
    setTimeout(() => {
      expect(getTodoItems().length).toBe(1);
      expect(getTodoItems()[0].nativeElement.textContent.trim()).toBe('bbb');
      done();
    });
  });
});
