import axios from 'axios';
import routesApi from './routesApi.json';
import { apiUrlHelper } from './helpers';
import { getDinamicPathForOneParam } from '../config/helpers';

/* CRUD posts actions */
// CREATE
export const apiCreatePost = async (formData, callbackResponse, callbackError) => {
  try {
    let response = await axios({
      method: routesApi.v1.posts.create.method,
      url: apiUrlHelper(routesApi.v1.posts.create.path),
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    callbackResponse && callbackResponse(response);
    return {status: response.status};
  } catch (error) {
    callbackError && callbackError();
    return {status: error.response.status, errors: error.response.data.errors};
  }
}

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
}

// UPDATE
export const apiUpdatePost = async (formData, id, callbackResponse, callbackError) => {
  console.log(id);
  console.log(routesApi.v1.posts.update.path);
  console.log(getDinamicPathForOneParam(apiUrlHelper(routesApi.v1.posts.update.path), id));
  try {
    let response = await axios({
      method: routesApi.v1.posts.update.method,
      url: apiUrlHelper(routesApi.v1.posts.update.path),
      data: formData,
      headers: { 'Content-Type': 'multipart/form-data' }
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
}

// DELETE
export const apiDeletePost = () => {

}