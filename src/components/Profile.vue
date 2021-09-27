<template>
  <div class="profile-card card rounded shadow">
    <div class="mt-4">
      <div class="row cover-img">
        <img class="user-img" @click="goToProfile(post.creatorId)" :src="profile.picture" alt="">
      </div>
      <div class="profile-info bg-dark text-light card rounded shadow">
        <div class="d-flex">
          <div>
            <h1>{{ profile.name }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { router } from '../router'
import { profileService } from '../services/ProfileService'
export default {
  props: {
    profile: { type: Object, required: true }
  },
  setup() {
    return {
      async goToProfile(id) {
        await profileService.getUserProfile(id)
        router.push({ name: 'Profile' })
      }
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
