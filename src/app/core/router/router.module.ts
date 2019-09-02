import { NgModule } from '@angular/core';
import { createFeatureSelector, StoreModule } from '@ngrx/store';
import {
  getSelectors,
  routerReducer,
  RouterState,
  RouterReducerState,
  StoreRouterConnectingModule
} from '@ngrx/router-store';

export const selectRouter = createFeatureSelector<any, RouterReducerState>(
  'router'
);

const {
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl // select the current url
} = getSelectors(selectRouter);

export const selectFilter = selectQueryParam('filter');

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('router', routerReducer),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    })
  ]
})
export class RouterModule {}
