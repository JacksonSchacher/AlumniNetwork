<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row">
      <Sidebar class="col-md-2" />

      <div class="col-md-10">
        <router-view />
      </div>
    </div>
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-2">
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
html,body {
  height: 100vh;
}
</style>
