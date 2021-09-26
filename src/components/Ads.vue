<template>
  <div class="ad-block">
    <div v-for="ad in ads" :key="ad.id">
      <div class="card mb-3">
        <img :src="ad.tall" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { adService } from '../services/AdService'

export default {
  setup() {
    onMounted(async() => {
      try {
        await adService.getAds()
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
    })
    return {
      ads: computed(() => AppState.ads)
    }
  }
}
</script>

<style scoped lang="scss">
img {
  max-height: 44vh;
}
</style>
