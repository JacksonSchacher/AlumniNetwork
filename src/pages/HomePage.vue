<template>
  <div class="row bg-dark">
    <div class="col-10">
      <div class="accordion accordion-flush mb-3 w-50 m-auto" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
            >
              Create Post
            </button>
          </h2>
          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
              <CreatePost />
            </div>
          </div>
        </div>
      </div>
      <Thread />
    </div>
    <div class="d-flex col-1">
      <Ads />
    </div>
    <div class="col-10 d-flex justify-content-center">
      <div v-if="posts.newer">
        <span class="me-3 selectable" @click="goToPage(posts.newer)"><i class="mdi mdi-arrow-left pe-1"></i>
          Newer</span>
      </div>
      <div v-if="posts.older">
        <span class="ms-3 selectable" @click="goToPage(posts.older)">Older<i class="mdi mdi-arrow-right ps-1"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { postService } from '../services/PostService'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    return {
      async goToPage(data) {
        await postService.getPage(data)
      },
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
