import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HomePage } from './containers/home/home.page';
import { homeReducer } from './state/home.reducer';
import { HomeEffects } from './state/home.effects';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { UnitsSelectorComponent } from './containers/units-selector/units-selector.component';

@NgModule({
  declarations: [
    HomePage,
    CurrentWeatherComponent,
    UnitsSelectorComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    StoreModule.forFeature('home', homeReducer),
    EffectsModule.forFeature([HomeEffects]),
    ComponentsModule,
  ],
})
export class HomeModule { }
