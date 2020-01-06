import { FormGroup, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export const checkPassword = (control) => {
    const password = control.get('password').value;
    const confirm = control.get('confirmPassword').value;

    // tslint:disable-next-line: no-unused-expression
    password === confirm ? null : control.get('confirmPassword').setErrors({notSame : true});
};

/* export function checkPassword(control : AbstractControl){
    const password = control.get('password');
    const confirm = control.get('confirmPassword');
} */
