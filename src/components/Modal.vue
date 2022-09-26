<template>
  <div class="close__decoy" @click="closeModal"></div>
  <div class="app__modal">

    <div class="modal__top">
        <div class="close__modal" @click="closeModal">
            Close (Esc)
        </div>

        <button class="mark__read" @click="markSelectionAsRead">Mark as read (r)</button>

        <button class="mark__archive" @click="markSelectionAsArchive">Archive (a)</button>
    </div>

    <div class="modal__body">
        <h2 class="modal__body__title">{{ dialogMail.title }}</h2>
        <div class="modal__body__body">{{ dialogMail.body }}</div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex"
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
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.key == "r") {
        this.markSelectionAsRead()
      } else if (e.key == "a") {
        this.markSelectionAsArchive()
      } else if (e.key == "Escape") {
        this.closeModal()
      }
    });
  }
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

.modal__body__title {
    margin-bottom: 20px;
}

.mark__read {
    margin-right: 10px;
}
</style>