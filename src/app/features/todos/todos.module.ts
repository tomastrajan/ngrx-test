import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import {FormsModule} from '@angular/forms';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { FEATURE_NAME, reducer } from './state/todos.reducer';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    FormsModule,
    TodosRoutingModule,
    StoreModule.forFeature(FEATURE_NAME, reducer)
  ]
})
export class TodosModule {}
