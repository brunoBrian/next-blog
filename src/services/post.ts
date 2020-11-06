import api from './api';

export default class PostService {
  static getAllPosts(endpoint: string) {
    return api.get(endpoint);
  }
}
