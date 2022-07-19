import Validator from 'validatorjs';

export default function validate(data, rules, messages) {
  const validation = new Validator(data, rules, messages);
  if (validation.fails()) {
    return validation.errors.errors;
  }
}
