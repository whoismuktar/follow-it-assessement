<template>
  <side-bar />
  <main class="app__body">
    <router-view />
  </main>
  <modal v-if="dialogMailActive" />
</template>

<script>
import SideBar from "./components/SideBar"
import Modal from "./components/Modal"
import { mapState } from "vuex"

export default {
  components: { 
    SideBar,
    Modal,
  },
  computed: {
    ...mapState([
      "dialogMailActive"
    ])
  }
}
</script>

<style src="@/assets/css/style.css"></style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
