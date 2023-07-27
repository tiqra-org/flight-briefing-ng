import {
  AbstractControl,
  FormArray,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const regexPatternValidator = (
  pattern: RegExp,
  errors: ValidationErrors,
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const arrValue = value.trim().split(' ');

    if (arrValue.length === 0) {
      return null;
    }

    const validValues = arrValue.filter((c: string) => pattern.exec(c));
    if (validValues.length === arrValue.length) {
      return null;
    }

    return errors;
  };
};

export function atLeastOneCheckboxRequired(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control instanceof FormArray) {
      const checkedKeys = Object.keys(control.controls).filter(
        (key, index) => control.controls[index].value,
      );

      if (checkedKeys.length === 0) {
        return { requireCheckboxesToBeChecked: true };
      }

      return null;
    }
    return null;
  };
}

export function atLeastOneFieldRequired(controlNames: string[]) {
  return (group: AbstractControl) => {
    if (
      controlNames.map(name => group.get(name)).filter(c => c?.value).length ===
      0
    ) {
      return { atLeastOneRequired: true };
    }
    return null;
  };
}
