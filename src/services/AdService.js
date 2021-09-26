import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AdService {
  async getAds() {
    const res = await api.get('api/ads')
    logger.log('Get Ads', res)
    AppState.ads = res.data
    logger.log('Appstate Ads', AppState.ads)
  }
}

export const adService = new AdService()
