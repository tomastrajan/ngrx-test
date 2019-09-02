import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserModule } from './user/user.module';
import { RouterModule } from './router/router.module';

@NgModule({
  declarations: [],
  imports: [
    // vendor
    CommonModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

    // local
    RouterModule,
    UserModule
  ]
})
export class CoreModule { }
