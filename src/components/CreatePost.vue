<template>
  <div>
    <div class="d-flex justify-content-center">
      <div class="card mb-5 w-75 p-4 rounded text-center">
        <div class="card-header ">
          <h2>Create Post</h2>
        </div>
        <form @submit.prevent="createPost()">
          <div class="form-group">
            <label for="body" class="">Text</label>
            <input
              placeholder="body text.."
              v-model="editable.body"
              type="text"
              class="form-control"
              name="body"
              id="body"
              required
            >
          </div>
          <div class="form-group">
            <label for="imgUrl" class="">Image</label>
            <input
              placeholder="Image URL.."
              v-model="editable.imgUrl"
              type="url"
              class="form-control"
              name="imgUrl"
              id="imgUrl"
            >
          </div>
          <div>
            <button type="reset" class="btn btn-seconday selectable">
              Cancel
            </button>
            <button type="submit" class="btn btn-success lighten-30 selectable">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { postService } from '../services/PostService'
import Pop from '../utils/Pop'
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async createPost() {
        try {
          await postService.createPost(editable.value)
          editable.value = {}
        } catch (error) {
          Pop.toast(error.message, 'error')
        }
      }
    }
  }
}
</script>

<style>

</style>
