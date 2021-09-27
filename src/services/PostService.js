import { AppState } from '../AppState'
import { convertToQuery } from '../utils/HarrisonsMagicQueryUtil'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class PostService {
  async findPost(query) {
    const res = await api.get(`api/posts?query=${query}`)
    logger.log('Search for Post', res)
    AppState.posts = res.data
    logger.log('Search Array', AppState.posts)
  }

  async getPosts(query = {}) {
    AppState.posts = []
    logger.log('What are you querying?', query)
    const res = await api.get('api/posts' + convertToQuery(query))
    logger.log('Posts', res)
    AppState.posts = res.data
    logger.log('getPostsAppStateData', AppState.posts)
  }

  async createPost(data) {
    const res = await api.post('api/posts', data)
    logger.log('Create Post', res)
    AppState.posts.unshift(res.posts.data)
    this.getPosts()
  }

  async deletePost(postId) {
    await api.delete(`api/posts/${postId}`)
    AppState.posts = AppState.posts.posts.filter(p => p.id !== postId)
    this.getPosts()
  }

  async toggleLikes(postId) {
    const res = await api.post(`api/posts/${postId}/like`)
    logger.log('ToggleLikes', res)
    const postIndex = AppState.posts.posts.findIndex(p => p.id === postId)
    AppState.posts.posts.splice(postIndex, 1, res.data)
    AppState.posts = [...AppState.posts]
    logger.log('Likes', res)
    this.getPosts()
  }

  async getPage(data) {
    const res = await api.get(data)
    logger.log('Get Page', res)
    AppState.posts = res.data
  }
}
export const postService = new PostService()
