<template>
  <div class="container-fluid bg-dark">
    <div class="row threads">
      <div class="col-md-6 flex-grow-1" v-for="p in posts" :key="p.id">
        <Post :post="p" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
import { postService } from '../services/PostService'

export default {
  setup() {
    onMounted(async() => {
      try {
        await postService.getPosts()
      } catch (error) {
        Pop.toast(error.message, 'error')
      }
    })
    return {
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
