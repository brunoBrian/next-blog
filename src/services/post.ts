import env from '../config/environment.json';
import api from './api';

export default class PostService {
  static getAllPosts(query = '') {
    const endpoint = env.endpoints.posts.replace('{{query}}', query);
    return api.get(endpoint);
  }
}
