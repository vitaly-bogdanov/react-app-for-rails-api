import Home from '../views/pages/client/home/Home';
import Posts from '../views/pages/client/posts/PostsContainer';
import Post from '../views/pages/client/post/Post';

import PostsList from '../views/pages/admin/postsList/PostsListContainer';
import PostCreator from '../views/pages/admin/postCreator/PostCreator';
import PostUpdator from '../views/pages/admin/postUpdator/PostUpdator';

import Registration from '../views/pages/client/registration/Registration';
import Authentication from '../views/pages/client/authentication/Authentication';

import Error404 from '../views/errors/404/Error404';

import Client from '../views/layouts/client/Client';
import Admin from '../views/layouts/admin/Admin';

export const home = {
  name: 'Главная',
  path: '/',
  page: Home,
  layout: Client,
  exact: true,
  access: {
    guest: true,
    user: true,
    admin: true,
  }
}

export const posts = {
  name: 'Все посты',
  path: '/posts',
  page: Posts,
  layout: Client,
  exact: true,
  access: {
    guest: true,
    user: true,
    admin: true,
  }
}

export const post = {
  name: '',
  path: '/posts/:id',
  page: Post,
  layout: Client,
  exact: false,
  access: {
    guest: true,
    user: true,
    admin: true
  }
}

export const postsList = {
  name: 'Все записи',
  path: '/posts-list',
  page: PostsList,
  layout: Admin,
  exact: false,
  access: {
    guest: false,
    user: true,
    admin: true
  }
}

export const postCreator = {
  name: 'Создать пост',
  path: '/post-create',
  page: PostCreator,
  layout: Admin,
  exact: false,
  access: {
    guest: false,
    user: true,
    admin: true
  }
}

export const postUpdator = {
  name: 'Редактировать пост',
  path: '/post-update/:id',
  page: PostUpdator,
  layout: Admin,
  exact: false,
  access: {
    guest: false,
    user: true,
    admin: true
  }
}

export const registration = {
  name: 'Регистрация',
  path: '/registration',
  page: Registration,
  layout: Client,
  exact: false,
  access: {
    guest: true,
    user: false,
    admin: false
  }
}

export const authentication = {
  name: 'Авторизация',
  path: '/authentication',
  page: Authentication,
  layout: Client,
  exact: false,
  access: {
    guest: true,
    user: false,
    admin: false
  }
}

export const error404 = {
  name: '404',
  path: '/404',
  page: Error404,
  layout: Client,
  exact: false,
  access: {
    guest: true,
    user: true,
    admin: true
  }
}