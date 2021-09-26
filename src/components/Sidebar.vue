<template>
  <div class="sidebar flex-column align-items-center p-4 justify-content-center d-md-flex d-none d-md-block bg-warning">
    <img :src="account.picture" class="account-img" alt="" @click="goToAccount()">
    <h4 class="mt-4">
      {{ account.name }}
    </h4>
    <div>
      <ul>
        <li>
          <i class="mdi mdi-github f-16">Github</i> <br>
          <cite>{{ account.github }}</cite>
        </li>
        <li>
          <i class="mdi mdi-linkedin f-16">LinkedIn</i> <br>
          <cite>{{ account.linkedin }}</cite>
        </li>
        <li>
          <i class="mdi mdi-email f-16">Email</i> <br>
          <cite>{{ account.email }}</cite>
        </li>
      </ul>
    </div>
    <div class="align-self-end logout selectable">
      <i class="mdi mdi-logout f-16">Logout</i>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { router } from '../router'
export default {
  setup() {
    return {
      async goToAccount() {
        router.push({ name: 'Account' })
      },
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped lang="scss">
.account-img {
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 50%;
}
.logout {
  position: absolute;
  bottom: -1rem;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
