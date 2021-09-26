<template>
  <div class="profile-card card rounded shadow" :style="{backgroundImage: `url(${account.coverImg})`}">
    <div class="mt-4">
      <div class="row cover-img">
        <img class="user-img" :src="account.picture" alt="">
      </div>
      <div class="profile-info bg-dark text-light card rounded shadow">
        <div class="d-inline-flex">
          <div>
            <h1>{{ account.name }}</h1>
          </div>
          <div>
            <i class="mdi mdi-github"></i>
            <i class="mdi mdi-linkedin"></i>
            <i class="mdi mdi-email"></i>
          </div>
        </div>
      </div>
      <div>
        <p>{{ account.bio }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
.profile-card {
  margin: 3rem;
}
.user-img {
  position: absolute;
  bottom: 1rem;
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
  position: absolute;
  align-items: baseline;
  bottom: -5rem;
  width: 55vw;
  margin-left: 3rem;
  padding: 1rem;
}
</style>
