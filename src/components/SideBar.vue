<template>
  <div class="sidebar">
    <div class="sidebar__wrapper">
      <div
        v-for="(menu, index) in menuItems"
        :key="index"
        class="sidebar__wrapper__item"
        :class="[`sidebar__wrapper__item__${menu.id}`]"
        @click="gotoPath(menu)"
      >
        {{ menu.title }} ({{ getOwnCount(menu.id) }})
      </div>

      <div class="spacer"></div>

      <div
        class="sidebar__wrapper__item sidebar__wrapper__item__logout"
      >
        Logout
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "sidebar",
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState([
      "menuItems"
    ]),
    ...mapGetters([
        "readCount",
        "archiveCount",
    ]),
  },
  methods: {
    gotoPath(menu) {
      this.$router.push({name: menu.path})
    },
    getOwnCount(id) {
      switch (id) {
        case "inbox":
            return this.readCount || 0; 
        case "archive":
            return this.archiveCount || 0;
        default:
            break;
      }
    },
  },
};
</script>

<style scoped>
.sidebar {
  background: #373636;
  width: 300px;
  height: 100vh;
  padding: 20px;
  position: fixed;
  left: 0;
  top: 0;
}
.sidebar__wrapper {
    height: 95%;
    display: flex;
    flex-direction: column;
}
.sidebar__wrapper__item {
    color: #373636;
    cursor: pointer;
    background-color: #ffffff;
    padding: 12px 10px;
    border-radius: 10px;
    margin-bottom: 20px;
    font-weight: bold;
}

.sidebar__wrapper__item__logout {
    color: #373636;
    cursor: pointer;
    background-color: #ffffff;
    padding: 12px 10px;
    border-radius: 10px;
    margin-bottom: 20px;
    font-weight: bold;
}
</style>
