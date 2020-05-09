import postsReducer from './postsReducer';
import { 
  addPostCreator,
  getPostsCreator,
  updatePostCreator,
  deletePostCreator
} from '../actions/actionCreators';

it('should add post to state', () => {
  const initialState = {
    postsList: [
      { id: 1, title: 'test 1', description: 'test description 1', body: 'test body 1', image: 'image.jpg' },
      { id: 2, title: 'test 2', description: 'test description 2', body: 'test body 2', image: 'image.jpg' },
    ],
    loaded: true,
    count: 2
  };

  let action = addPostCreator({ id: 3, title: 'test 3', description: 'test description 3', body: 'test body 3', image: 'image.jpg' });
  let newState = postsReducer(initialState, action);

  expect(newState.count).toBe(3);
  expect(newState.postsList.length).toBe(3);
  expect(newState.loaded).toBe(true);
});

it('should get all posts', () => {
  const initialState = {
    postsList: [],
    loaded: false,
    count: 0
  };
  let posts = [
    { id: 1, title: 'test 1', description: 'test description 1', body: 'test body 1', image: 'image.jpg' },
    { id: 2, title: 'test 2', description: 'test description 2', body: 'test body 2', image: 'image.jpg' },
  ];
  let action = getPostsCreator(posts);
  let newState = postsReducer(initialState, action);

  expect(newState.count).toBe(2);
  expect(newState.postsList.length).toBe(2);
  expect(newState.loaded).toBe(true);
});

it('should update post', () => {
  const initialState = {
    postsList: [
      { id: 1, title: 'test 1', description: 'test description 1', body: 'test body 1', image: 'image.jpg' },
      { id: 2, title: 'test 2', description: 'test description 2', body: 'test body 2', image: 'image.jpg' },
    ],
    loaded: true,
    count: 2
  };
  let updatedPost = { id: 1, title: 'test 1 (updated)', description: 'test description 1', body: 'test body 1', image: 'image.jpg' };
  let action = updatePostCreator(updatedPost);
  let newState = postsReducer(initialState, action);
  expect(newState.postsList.find(post => post.id === 1).title).toBe('test 1 (updated)');
  expect(newState.count).toBe(2);
  expect(newState.loaded).toBe(true);
});

it('should delete post', () => {
  const initialState = {
    postsList: [
      { id: 1, title: 'test 1', description: 'test description 1', body: 'test body 1', image: 'image.jpg' },
      { id: 2, title: 'test 2', description: 'test description 2', body: 'test body 2', image: 'image.jpg' },
    ],
    loaded: true,
    count: 2
  };
  let action = deletePostCreator(1);
  let newState = postsReducer(initialState, action);
  expect(newState.postsList.find(post => post.id === 1)).toBe(undefined);
});