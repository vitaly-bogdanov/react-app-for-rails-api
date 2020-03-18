export const validateEmail = (value) => {
  let error;
  if (value.trim() === '') {
    error = 'Поле Email обязательно';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Некорректный Email';
  }
  return error;
}
    
export const validatePasswordCreator = (min, max) => value => {
  let error;
  if (value.trim() === '') {
    error = 'Введите пароль';
  }
  if (value.trim().length > max) {
    error = `Пароль не может иметь больше ${max} символов`;
  }
  if (value.trim().length < min) {
    error = `Пароль не может иметь меньше ${min} символов`;
  }
  return error;
}

export const textValidationCreator = (min, max) => (value) => {
  let error;
  if (value.length > max) {
    error = `Максимальное количество символов: ${max}. Введено: ${value.length}.`
  }
  if (value.length < min) {
    error = `Минимальное количество символов: ${min}. Введено: ${value.length}.`
  }
  return error;
}
    
export const confirmValidatePasswordCreator = (passwordConfirm, touchedPasswordConfirm) => password => {
  let error;
  if (password.trim() === '') {
    error = 'Поле не может быть пустым';
  }
  if (password.trim() !== '' && touchedPasswordConfirm && password !== passwordConfirm) {
    error = 'Пароли не совпадают';
  }
  return error;
}
