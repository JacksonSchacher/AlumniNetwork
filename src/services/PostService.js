import { AppState } from '../AppState'
import { convertToQuery } from '../utils/HarrisonsMagicQueryUtil'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostService {
  async getPosts(query = {}) {
    AppState.posts = []
    logger.log('What are you querying?', query)
    const res = await api.get('api/posts' + convertToQuery(query))
    logger.log('Posts', res)
    AppState.posts = res.data.posts
  }

  async createPost(data) {
    const res = await api.post('api/posts', data)
    logger.log('Create Post', res)
    AppState.posts.unshift(res.data)
  }
}
export const postService = new PostService()
