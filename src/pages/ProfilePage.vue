<template>
  <div class="row bg-dark">
    <div class="col-10">
      <div class="mt-4">
        <div class="row cover-img" :style="{backgroundImage: `url(${profile.coverImg})`}">
          <img class="user-img" :src="profile.picture" alt="">
        </div>
        <div class="d-inline-flex profile-info">
          <div>
            <h1>{{ profile.name }}</h1>
          </div>
          <div class="">
            <i class="mdi mdi-github"></i>
            <i class="mdi mdi-linkedin"></i>
            <i class="mdi mdi-email"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-1">
      <Ads />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      profile: computed(() => AppState.profile)
    }
  }
}
</script>

<style scoped lang="scss">
.user-img {
  position: absolute;
  bottom: 10rem;
  height: 10rem;
  width: 10rem;
  object-fit: cover;
  border-radius: 50%;
}
.cover-img {
  height: 50vh;
  width: 100%;
  background-size: cover;
  position: center;
}
.profile-info {
  align-items: baseline;

}
</style>
