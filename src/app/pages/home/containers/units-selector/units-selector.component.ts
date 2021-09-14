import { Component, OnInit } from "@angular/core";

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from 'src/app/shared/state/app.reducer';
import { Units } from 'src/app/shared/models/units.enum';
import * as fromConfigSelectors from '../../../../shared/state/config/config.selectors';
import * as fromConfigActions from '../../../../shared/state/config/config.actions';

@Component({
  selector: 'app-units-selector',
  templateUrl: './units-selector.component.html',
  styleUrls: ['./units-selector.component.scss']
})
export class UnitsSelectorComponent implements OnInit {

  unit$: Observable<Units>;
  unit: Units;

  unitsEnum = Units;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.unit$ = this.store.pipe(select(fromConfigSelectors.selectUnitConfig));
    this.unit$
      .subscribe(unit => this.unit = unit);
  }

  updateUnit(unit: Units) {
    this.store.dispatch(fromConfigActions.updateUnit({ unit }));
  }

}
