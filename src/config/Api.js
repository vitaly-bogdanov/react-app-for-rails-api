import axios from 'axios';
import routesApi from './routesApi.json';
import { apiUrlHelper } from './helpers';

/* CRUD posts actions */
// CREATE
export const apiCreatePost = async (formData, callbackResponse, callbackError) => {
  try {
    let response = await axios({
      method: routesApi.v1.posts.create.method,
      url: apiUrlHelper(routesApi.v1.posts.create.path),
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
      withCredentials: true
    });
    callbackResponse && callbackResponse(response);
    return {status: response.status};
  } catch (error) {
    console.dir(error);
    callbackError && callbackError();
    return {status: error.response.status, errors: error.response.data.errors};
  }
};

// READ
export const apiGetPosts = (callbackResponse, callbackError) => {
  axios({
    method: routesApi.v1.posts.read.method, 
    url: apiUrlHelper(routesApi.v1.posts.read.path)
  }).then(response => {
    callbackResponse 
      ? callbackResponse(response.data) 
      : console.error('Не передана функция обратного вызова, обрабатывающая ответ от сервера');
  }).catch(error => {
    callbackError 
      ? callbackError(error) 
      : console.error(error);
  });
};

// UPDATE
export const apiUpdatePost = async (formData, id, callbackResponse, callbackError) => {
  try {
    let response = await axios({
      method: routesApi.v1.posts.update.method,
      url: apiUrlHelper(routesApi.v1.posts.update.path, id),
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' },
      withCredentials: true
    });
    callbackResponse && callbackResponse(response);
    return {status: response.status};
  } catch (error) {
    if (error.response.status === 422) {
      return {status: error.response.status, errors: error.response.data.errors};
    } else {
      console.error(error);
    }
  }
};

// DELETE
export const apiDeletePost = async (id, callbackResponse, callbackError) => {
  try {
    let response = await axios({
      method: routesApi.v1.posts.delete.method,
      url: apiUrlHelper(routesApi.v1.posts.delete.path, id),
      withCredentials: true
    });
    callbackResponse && callbackResponse(response);
  } catch (error) {
    callbackError && callbackError(error);
  }
};

// проверка есть ли ползователь в сессии
export const apiLoggedIn = async (callbackResponse, callbackError) => {
  try {
    let response = await axios({ 
      method: routesApi.v1.sessions.loggedIn.method,
      url: apiUrlHelper(routesApi.v1.sessions.loggedIn.path),
      withCredentials: true 
    });
    callbackResponse && callbackResponse(response);
  } catch (error) {
    callbackError && callbackError(error);
  }
};

// регистрация
export const apiRegistration = async (formData, callbackResponse, callbackError) => {
  try {
    let response = await axios({
      method: routesApi.v1.users.create.method,
      url: apiUrlHelper(routesApi.v1.users.create.path),
      data: formData,
      withCredentials: true
    });
    callbackResponse && callbackResponse(response);
    return {status: response.status};
  } catch (error) {
    callbackError && callbackError(error);
    return {status: error.response.status, errors: error.response.data.errors};
  }
}

// авторизация
export const apiLogin = async (formData, callbackResponse, callbackError) => {
  try {
    let response = await axios({
      method: routesApi.v1.sessions.login.method,
      url: apiUrlHelper(routesApi.v1.sessions.login.path),
      data: formData,
      withCredentials: true
    });
    callbackResponse 
      ? callbackResponse(response) 
      : console.error('Не передана функция обратного вызова, обрабатывающая ответ от сервера');
    return {status: response.status};
  } catch (error) {
    callbackError
      ? callbackError(error) 
      : console.error('Не передана функция обратного вызова, обрабатывающая ответ от сервера');
    return {status: error.response.status, errors: error.response.data.errors};
  }
}

// выход
export const apiLogout = async (callbackResponse, callbackError) => {
  try {
    let response = await axios({
      method: routesApi.v1.sessions.logout.method,
      url: apiUrlHelper(routesApi.v1.sessions.logout.path),
      withCredentials: true
    });
    callbackResponse && callbackResponse(response);
  } catch (error) {
    callbackError && await callbackError(error);
  }
}