<template>
  <div class="row bg-dark">
    <div class="col-10">
      <div class="profile-card card rounded shadow" :style="{backgroundImage: `url(${account.coverImg})`}">
        <div class="mt-4">
          <div class="row cover-img">
            <img class="user-img" :src="account.picture" alt="">
          </div>
          <div class="profile-info bg-dark text-light card rounded shadow">
            <div class="d-flex">
              <div>
                <h1>{{ account.name }}</h1>
              </div>
              <div>
                <i class="mdi mdi-github"></i>
                <i class="mdi mdi-linkedin"></i>
                <i class="mdi mdi-email"></i>
              </div>
              <div class="edit selectable" data-bs-toggle="modal" data-bs-target="#edit-account">
                <i class="mdi mdi-account-edit"></i>
              </div>
            </div>
          </div>
          <div class="bg-light p-4 rounded">
            <p>{{ account.bio }}</p>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <Thread />
      </div>
    </div>
    <div class="d-flex col-1">
      <Ads />
    </div>
  </div>
  <Modal id="edit-account">
    <template #modal-title>
      <h5>Edit Account</h5>
    </template>
    <template #modal-body>
      <ProfileForm />
    </template>
  </Modal>
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
</style>
