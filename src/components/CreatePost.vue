<template>
  <div>
    <div class="d-flex">
      <div class="card w-100 p-2 rounded text-center">
        <form @submit.prevent="createPost()">
          <div class="form-group">
            <label for="body" class=""></label>
            <input
              placeholder="Text.."
              v-model="editable.body"
              type="text"
              class="form-control"
              name="body"
              id="body"
              required
            >
          </div>
          <div class="form-group">
            <label for="imgUrl" class=""></label>
            <input
              placeholder="Image URL.."
              v-model="editable.imgUrl"
              type="url"
              class="form-control"
              name="imgUrl"
              id="imgUrl"
            >
          </div>
          <div class="mt-2 d-flex justify-content-end">
            <button data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    type="reset"
                    class="btn btn-seconday selectable"
            >
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
