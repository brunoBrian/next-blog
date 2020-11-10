import env from '../config/environment.json';
import api from './api';

export default class PostService {
  static getAllPosts(query = '') {
    const endpoint = `${env.endpoints.posts}?${query}`;
    return api.get(endpoint);
  }

  static getPost(slug: string | string[]) {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const endpoint = `${env.endpoints.posts}?slug=${slugString}`;
    return api.get(endpoint);
  }

  static countAllPosts(query = '') {
    const endpoint = `${env.endpoints.posts}/count?${query}`;
    return api.get(endpoint);
  }
}
