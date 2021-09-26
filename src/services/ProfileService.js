import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfileService {
  async getUserProfile(id) {
    const res = await api.get('api/profiles/' + id)
    logger.log('get user profile', res)
    AppState.profile = res.data
  }
}
export const profileService = new ProfileService()
