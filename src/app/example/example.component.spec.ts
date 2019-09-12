import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleComponent } from './example.component';
import { Store, StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

describe('ExampleComponent', () => {
  let component: ExampleComponent;
  let fixture: ComponentFixture<ExampleComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      // imports: [ StoreModule.forRoot({}) ],
      providers: [provideMockStore()],
      declarations: [ ExampleComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<{}>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
