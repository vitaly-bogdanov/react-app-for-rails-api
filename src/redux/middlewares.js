import { getPostsCreator, authorizationCreator } from './actions/actionCreators';
import { loggedInLocalStorageHelper } from '../config/helpers';
import { apiGetPosts, apiLoggedIn } from '../config/Api';

// подгрузить все посты
// скорей всего не понадобится
export const getPostsThunk = () => dispatch => apiGetPosts(data => dispatch(getPostsCreator(data)));

// проверка сессии: залогинен ли пользователь или нет.
// и подгрузка всех постов
export const loggedInThunk = () => dispatch => {
  apiLoggedIn(response => {
    dispatch(authorizationCreator(response.data.user));
    dispatch(getPostsCreator(response.data.posts));
    loggedInLocalStorageHelper(response.data.user);
  }, error => {
    error.response && dispatch(getPostsCreator(error.response.data.posts));
  });
}