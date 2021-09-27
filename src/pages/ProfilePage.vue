<template>
  <div class="row bg-dark">
    <div class="col-10">
      <div class="profile-card card rounded shadow" :style="{backgroundImage: `url(${profile.coverImg})`}">
        <div class="mt-4">
          <div class="row cover-img">
            <img class="user-img" :src="profile.picture" alt="">
          </div>
          <div class="profile-info bg-dark text-light card rounded shadow">
            <div class="d-flex">
              <div>
                <h1>{{ profile.name }}</h1>
              </div>
              <div>
                <i class="mdi mdi-github"></i>
                <i class="mdi mdi-linkedin"></i>
                <i class="mdi mdi-email"></i>
              </div>
            </div>
          </div>
          <div class="bg-light p-4 rounded">
            <p>{{ profile.bio }}</p>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <Thread />
      </div>
    </div>
    <div class="d-flex col-1">
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
  height: 9rem;
  width: 10rem;
  object-fit: cover;
  border-radius: 50%;
  z-index: 1;
    left: 0rem;
}
.cover-img {
  height: 50vh;
  width: 100%;
  background-size: cover;
  position: center;
}
.profile-info {
  align-items: baseline;
  width: 55vw;
  margin-left: 3rem;
  padding: 1rem;
}
.profile-card {
  background-position: center;
  margin: 3rem;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
