import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserEffects } from './state/user.effects';
import * as fromUser from './state/user.reducer';
import * as UserAction from './state/user.actions';

export * from './state/user.model';
export * from './state/user.reducer';
export * from './state/user.actions';
export * from './state/user.selector';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule {
  constructor(private store: Store<{}>) {
    this.store.dispatch(UserAction.loadUser());
  }
}

