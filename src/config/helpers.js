export const getValidateClassHelper = (errors, touched) => {
  if (touched) {
    return errors ? 'is-invalid' : 'is-valid';
  } else {
    return '';
  }
}