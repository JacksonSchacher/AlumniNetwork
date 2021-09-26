<template>
  <div class="d-flex justify-content-center">
    <div class="card shadow rounded mb-5 w-75">
      <div class="card-header d-inline-flex align-items-end">
        <img :src="post.creator.picture" class="user-picture img-fluid selectable" @click="goToProfile(post.creatorId)">
        <h5>{{ post.creator.name }}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">
          {{ post.body }}
        </p>
        <img :src="post.imgUrl" class="card-img-top img-fluid" alt="...">
      </div>
      <div class="card-footer">
        <i class="mdi mdi-hexagon-outline selectable" @click="toggleLikes(post.id)">{{ post.likes.length }}</i>
        <i class="mdi mdi-hexagon"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { router } from '../router'
import { postService } from '../services/PostService'
import { profileService } from '../services/ProfileService'
import { watchEffect } from '@vue/runtime-core'
export default {
  props: {
    post: { type: Object, required: true }
  },
  setup(props) {
    const post = ref({})
    watchEffect(() => {
      post.likes.length = { ...props.likes }
    })
    return {
      async goToProfile(id) {
        await profileService.getUserProfile(id)
        router.push({ name: 'Profile' })
      },
      async toggleLikes(id) {
        await postService.toggleLikes(id)
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
</style>
