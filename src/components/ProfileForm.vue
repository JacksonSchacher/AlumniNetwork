<template>
  <form @submit.prevent="editAccount()">
    <div class="form-group">
      <label for="picture"></label>
      <input v-model="editable.picture"
             type="url"
             name="picture"
             class="form-control border-0"
             placeholder="Account Picture"
      >
    </div>
    <div class="form-group">
      <label for="name"></label>
      <input v-model="editable.name"
             type="text"
             name="name"
             class="form-control border-0"
             placeholder="Account Name"
      >
    </div>
    <div class="form-group">
      <label for="coverImg"></label>
      <input v-model="editable.coverImg"
             type="url"
             name="coverImg"
             class="form-control border-0"
             placeholder="Cover Picture"
      >
    </div>
    <div class="form-group">
      <label for="github"></label>
      <input v-model="editable.github"
             type="url"
             name="github"
             class="form-control border-0"
             placeholder="Github Link"
      >
    </div>
    <div class="form-group">
      <label for="linkedin"></label>
      <input v-model="editable.linkedin"
             type="url"
             name="linkedin"
             class="form-control border-0"
             placeholder="LinkedIn Url"
      >
    </div>
    <div class="form-group">
      <label for="bio"></label>
      <input v-model="editable.bio"
             type="text"
             name="bio"
             class="form-control border-0"
             placeholder="Account Bio"
      >
    </div>
    <div>
      <button type="submit" class="btn btn-success">
        Update
      </button>
    </div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import Pop from '../utils/Pop'
import { Modal } from 'bootstrap'
import { accountService } from '../services/AccountService'
export default {
  setup() {
    const editable = ref({})

    return {
      editable,
      async editAccount() {
        try {
          await accountService.editAccount(editable.value)
          const modal = Modal.getInstance(document.getElementById('edit-account'))
          modal.hide()
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
