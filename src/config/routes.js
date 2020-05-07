import Home from '../views/pages/client/home/Home';
import Posts from '../views/pages/client/posts/PostsContainer';
import Post from '../views/pages/client/post/Post';

import PostsList from '../views/pages/admin/postsList/PostsListContainer';
import PostCreator from '../views/pages/admin/postCreator/PostCreator';
import PostUpdator from '../views/pages/admin/postUpdator/PostUpdator';

import Registration from '../views/pages/client/registration/Registration';
import Authentication from '../views/pages/client/authentication/Authentication';

import Error404 from '../views/errors/404/Error404';

export const home = {
  name: 'Главная',
  path: '/',
  component: Home,
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
  component: Posts,
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
  component: Post,
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
  component: PostsList,
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
  component: PostCreator,
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
  component: PostUpdator,
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
  component: Registration,
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
  component: Authentication,
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
  component: Error404,
  exact: false,
  access: {
    guest: true,
    user: true,
    admin: true
  }
}