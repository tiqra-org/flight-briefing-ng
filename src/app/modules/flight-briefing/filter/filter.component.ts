import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
import {
  AIRPORTS_PATTERN,
  COUNTRIES_PATTERN,
  reportTypes,
} from '../flight-briefing.constants';
import { stringToArray } from '../../shared/shared.utils';
import {
  atLeastOneCheckboxRequired,
  atLeastOneFieldRequired,
  regexPatternValidator,
} from './filter.component.validators';

@Component({
  selector: 'flight-briefing-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  @Output() query: EventEmitter<any> = new EventEmitter();

  reportTypes = reportTypes;

  form = new FormGroup(
    {
      reportTypes: new FormArray(
        Object.keys(this.reportTypes).map(() => new FormControl(false)),
        atLeastOneCheckboxRequired(),
      ),
      airports: new FormControl('', {
        validators: [
          regexPatternValidator(AIRPORTS_PATTERN, { airportsPattern: true }),
        ],
        updateOn: 'blur',
      }),
      countries: new FormControl('', {
        validators: [
          regexPatternValidator(COUNTRIES_PATTERN, { countriesPattern: true }),
        ],
        updateOn: 'blur',
      }),
    },
    atLeastOneFieldRequired(['airports', 'countries']),
  );

  get reportTypesFormArray() {
    return this.form.controls.reportTypes as FormArray;
  }

  get reportTypesValue(): string[] {
    return this.reportTypesFormArray.value
      .map((checked: boolean, i: number) =>
        checked ? this.reportTypes[i].id : null,
      )
      .filter((value?: string) => value !== null);
  }

  get airportsFormControl(): AbstractControl {
    return this.form.controls.airports as FormControl;
  }

  get airportsValue(): string[] {
    const v = this.airportsFormControl.value;
    return v ? stringToArray(v.toUpperCase()) : [];
  }

  get countriesFormControl(): AbstractControl {
    return this.form.controls.countries as FormControl;
  }

  get countriesValue(): string[] {
    const v = this.countriesFormControl.value;
    return v ? stringToArray(v.toUpperCase()) : [];
  }

  onSubmit = () => {
    if (this.form.valid) {
      const reportTypes = this.reportTypesValue;
      const airports = this.airportsValue;
      const countries = this.countriesValue;

      const data = {
        reportTypes,
        airports,
        countries,
      };

      this.query.emit(data);
    } else {
      this.form.markAllAsTouched();
    }
  };
}
