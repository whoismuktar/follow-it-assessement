<template>
  <div class="page__inbox">
    <div class="page__title">{{ pageName }}</div>

    <div class="selected__emails">Email Selected {{ selectedEmails }}</div>

    <div class="selection__action">
      <span class="selection__action__child select__all">
        <input v-model="markAll" type="checkbox" name="selectAll" id="selectAll" />
      </span>

      <span class="selection__action__child mark__read">
        <button id="mark__read" @click="markSelectionAsRead">
          Mark as read (r)
        </button>
      </span>

      <span class="selection__action__child mark__archive">
        <button id="mark__archive" @click="markSelectionAsArchive">
          Archive (a)
        </button>
      </span>
    </div>

    <div class="mails">
      <div
        v-for="(mail, index) in mails"
        :key="index"
        class="mails__item mail"
        :class="[`mail${isEmailRead(mail)}`]"
      >
        <span class="select__mail">
          <input
            v-model="selections"
            type="checkbox"
            :value="mail.id"
            name="selectMail"
            id="selectMail"
          />
        </span>

        <div class="mail__title" @click="openInModal(mail)">
          {{ mail.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      markAll: false,
      selections: [],
    };
  },
  computed: {
    ...mapState([
      "mails",
      "readMails",
    ]),
    selectedEmails() {
      return this.selections.length;
    },
    pageName() {
      return this.$route.name;
    },
  },
  watch: {
    markAll(val) {
      if(val) {
        this.selections = this.mails.map(mail => mail.id)
      } else {
        this.selections = []
      }
    }
  },
  methods: {
    markSelectionAsRead() {
      this.$store.dispatch("setReadMails", this.selections);
    },
    markSelectionAsArchive() {
      this.$store.dispatch("setArchiveMails", this.selections);
    },
    openInModal(mail) {
      this.$store.dispatch("openMailDialog", mail);
    },
    isEmailRead(mail) {
      if (this.readMails.includes(mail.id)) {
        return "__read"
      }
    },
  },
  created() {
    window.addEventListener('keydown', (e) => {
      if (!this.selections.length) return

      if (e.key == "r") {
        this.markSelectionAsRead()
      } else if (e.key == "a") {
        this.markSelectionAsArchive()
      }
    });
  }
};
</script>

<style scoped>
.selection__action__child {
  margin-right: 20px;
}

.selected__emails {
  font-weight: bold;
  font-size: 2rem;
  margin: 20px 0;
}

.mails {
  margin-top: 20px;
}

.mails__item {
  display: flex;
  padding: 10px;
  border-radius: 6px;
  background-color: #eaeaea;
  margin-bottom: 20px;
}

.mails__item .mail__title {
  cursor: pointer;
}

.mails__item.mail__read {
  opacity: 0.5
}

.mails__item .select__mail {
  margin-right: 20px;
}
</style>
