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

export const loggedInLocalStorageHelper = user => {
  localStorage.user = JSON.stringify(user);
}

export const getUserFromLocalStorageHelper = () => {
  if (localStorage.user) {
    return JSON.parse(localStorage.user);
  }
}

export const apiUrlHelper = (url, id) => {
  if (id) {
    return baseUrl + url.split(':')[0] + id;
  } else {
    return baseUrl + url;
  }
}

export const getPageNumber = (props) => {
  if (props.location.search) {
    return parseInt(props.location.search.split('=')[1]);
  } else {
    return 1;
  }
}