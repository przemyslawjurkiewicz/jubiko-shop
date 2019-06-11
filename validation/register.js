const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';
  data.city = !isEmpty(data.city) ? data.city : '';
  data.street= !isEmpty(data.street) ? data.street : '';
  data.zip= !isEmpty(data.zip) ? data.zip : '';

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = 'Imię i nazwisko jest wymagane';
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email jest wymagany';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Nieprawidłowy format email';
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = 'Hasło jest wymagane';
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Potwierdzenie hasła jest wymagane';
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Hasło musi mieć min. 6 znaków';
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Hasła się nie zgadzają';
  }
  // Adress checks
  if (Validator.isEmpty(data.city)) {
    errors.city = 'Podaj miasto';
  }
  if (Validator.isEmpty(data.street)) {
    errors.street = 'Podaj ulicę';
  }
  if (Validator.isEmpty(data.zip)) {
    errors.zip = 'Podaj kod';
  }
 // if (!Validator.isPostalCode(data.zip, 'PL')) {
  //  errors.password = 'Kod ma mieć postać 00-000';
 // }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
