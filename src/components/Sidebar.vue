<template>
  <div class="sidebar flex-column justify-content-between d-md-flex d-none d-md-block">
    <img :src="account.picture" class="account-img" alt="" @click="goToAccount()">
    <h4>
      {{ account.name }}
    </h4>
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
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
}
</style>
