import { createFeatureSelector, createSelector } from "@ngrx/store";

import { HomeState } from './home.reducer';

//export const selectHomeState = createFeatureSelector('home');

export const selectCurrentWeather = createSelector(
  createFeatureSelector('home'),
  (homeState: HomeState) => homeState.entity,
);

export const selectCurrentWeatherLoading = createSelector(
  createFeatureSelector('home'),
  (homeState: HomeState) => homeState.entity,
);
export const selectCurrentWeatherError = createSelector(
  createFeatureSelector('home'),
  (homeState: HomeState) => homeState.entity,
);
