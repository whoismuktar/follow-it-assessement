<template>
  <side-bar />
  <router-view/>
</template>

<script>
import SideBar from './components/SideBar'

export default {
  name: "sidebar",
  components: { SideBar },
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
