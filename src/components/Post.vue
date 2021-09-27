<template>
  <div class="d-flex justify-content-center">
    <div class="card bg-primary shadow rounded mb-5 w-100">
      <div v-if="account.id == post.creatorId" class="text-danger delete">
        <i @click="deletePost(post.id)" class="mdi mdi-delete f-20 selectable"></i>
      </div>
      <div class="card-header bg-light d-inline-flex align-items-end">
        <img :src="post.creator.picture" class="user-picture img-fluid selectable" @click="goToProfile(post.creatorId)">
        <h5>{{ post.creator.name }}</h5>
      </div>
      <div class="card-body text-light justify-content-center">
        <p class="card-text">
          {{ post.body }}
        </p>
        <img :src="post.imgUrl" class="card-img img-fluid" alt="...">
      </div>
      <div class="card-footer bg-light justify-content-end d-flex">
        <i class="mdi mdi-hexagon-outline selectable f-16" @click="toggleLikes(post.id)">{{ post.likes.length }}</i>
        <!-- <i class="mdi mdi-hexagon"></i> -->
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { router } from '../router'
import { postService } from '../services/PostService'
import { profileService } from '../services/ProfileService'
import { AppState } from '../AppState'

export default {
  props: {
    post: { type: Object, required: true }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),

      async goToProfile(id) {
        await profileService.getUserProfile(id)
        await postService.getPosts(id.value)
        router.push({ name: 'Profile' })
      },
      async toggleLikes(id) {
        await postService.toggleLikes(id)
      },
      async deletePost(id) {
        await postService.deletePost(id)
      }
    }
  }

}
</script>

<style scoped lang="scss">
.user-picture {
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
}
.card-header {
  border: none;
}
.card-img {
  max-height: 50vh;
  width: auto;
}
.delete {
  position: absolute;
  right: .25rem;
}
</style>
