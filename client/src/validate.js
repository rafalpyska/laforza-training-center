import { extend } from 'vee-validate';
import { required, email, min, regex } from 'vee-validate/dist/rules';

extend('required', {
  ...required,
  message: 'You cannot leave your {_field_} empty!',
});

extend('email', email);

extend('regex', regex);

extend('min', {
  ...min,
  params: ['length'],
  message: 'Your {_field_} must have at least {length} characters',
});

extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max', 'length'],
  message:
    'Your {_field_} must have at least {min} characters and {max} characters at most',
});
extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max', 'length'],
  message:
    'Your {_field_} must have at least {min} characters and {max} characters at most',
});
