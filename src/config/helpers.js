import { baseUrl } from './constants';

export const getValidateClassHelper = (errors, touched) => {
  if (touched) {
    return errors ? 'is-invalid' : 'is-valid';
  } else {
    return '';
  }
}

export const getDinamicPathForOneParam = (path, param) => {
  return `${path.split(':')[0]}${param}`;
}

export const loggedInLocalStorageHalper = user => {
  localStorage.user = user;
}

export const apiUrlHelper = (url, id) => {
  if (id) {

  } else {
    return baseUrl + url;
  }
}