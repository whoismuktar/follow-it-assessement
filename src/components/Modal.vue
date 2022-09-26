<template>
  <div class="close__decoy" @click="closeModal"></div>
  <div class="app__modal">
    <span class="close__modal" @click="closeModal">
        Close (Esc)
    </span>

    <button>Mark as read (r)</button>

    <button>Archive (a)</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "modal",
  methods: {
    closeModal() {
      this.$store.dispatch("resetModal");
    },
    markSelectionAsRead() {
      this.$store.dispatch("setReadMails", this.dialogMail);
    },
    markSelectionAsArchive() {
      this.$store.dispatch("setArchiveMails", this.dialogMail);
    },
  },
  computed: {
    ...mapState([
        "dialogMail"
    ])
  },
}
</script>

<style scoped>
.app__modal {
    position: fixed;
    right: 0;
    top: 0;
    background: #ffffff;
    height: 100vh;
    width: 500px;
    padding: 25px;
}

.close__decoy {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: #00000091;
}
</style>