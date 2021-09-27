import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getUserProfile(id) {
    const res = await api.get('api/profiles/' + id)
    logger.log('get user profile', res)
    AppState.profile = res.data
  }

  async findProfile(query) {
    const res = await api.get(`api/profiles?query=${query}`)
    logger.log('Search for Profile', res)
    AppState.profiles = res.data
  }
}
export const profileService = new ProfileService()
