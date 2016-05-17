import {POSTS_POPULAR_REQUEST,
        POSTS_POPULAR_SUCCESS,
        POSTS_POPULAR_ERROR,
        POSTS_NEWEST_REQUEST,
        POSTS_NEWEST_SUCCESS,
        POSTS_NEWEST_ERROR,
        POST_REQUEST,
        POST_SUCCESS,
        POST_ERROR} from './PostsActionTypes';
import {CALL_API} from '../middleware/api';

export const fetchPopularPosts = API_TOKEN => ({
  [CALL_API]: {
    types: [POSTS_POPULAR_REQUEST, POSTS_POPULAR_SUCCESS, POSTS_POPULAR_ERROR],
    endpoint: 'posts',
    config: {
      headers: {'Authorization': `Bearer ${API_TOKEN}`}
    }
  }
});

export const fetchNewestPosts = API_TOKEN => ({
  [CALL_API]: {
    types: [POSTS_NEWEST_REQUEST, POSTS_NEWEST_SUCCESS, POSTS_NEWEST_ERROR],
    endpoint: 'posts/all',
    config: {
      headers: {'Authorization': `Bearer ${API_TOKEN}`}
    }
  }
});

export const fetchPost = (API_TOKEN, id) => ({
  [CALL_API]: {
    types: [POST_REQUEST, POST_SUCCESS, POST_ERROR],
    endpoint: `posts/${id}`,
    config: {
      headers: {'Authorization': `Bearer ${API_TOKEN}`}
    }
  }
});
