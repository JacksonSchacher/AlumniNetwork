<template>
  <div class="row bg-dark">
    <div class="col-10">
      <div class="container-fluid bg-dark">
        <h2>Profiles</h2>
        <div class="row threads">
          <div class="col-md-6 flex-grow-1" v-for="u in profiles" :key="u.id">
            <Profile :profile="u" />
          </div>
        </div>
      </div>
      <div class="container-fluid bg-dark">
        <h2>Posts</h2>
        <div class="row threads">
          <div class="col-md-6 flex-grow-1" v-for="p in posts" :key="p.id">
            <Post :post="p" />
          </div>
        </div>
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
      profiles: computed(() => AppState.profiles),
      posts: computed(() => AppState.posts.posts)
    }
  }

}
</script>

<style scoped lang="scss">
.threads {
  height: 85vh;
  overflow-y: scroll;
}
.threads::-webkit-scrollbar {
  display: none;
}
</style>
