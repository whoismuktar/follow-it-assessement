<template>
  <div class="page__archive">
    <div class="page__title">{{ pageName }}</div>

    <div class="selected__emails">Email Selected {{ selectedEmails }}</div>

    <div class="selection__action">
      <span class="selection__action__child select__all">
        <input type="checkbox" name="selectAll" id="selectAll" />
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
        :class="[`mail${isEmailArchived(mail)}`]"
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
import { mapState } from 'vuex';
export default {
  data() {
    return {
      mails: [
        {
          id: 1,
          title: "This is title 1",
          body: "This is body 2",
        },
        {
          id: 2,
          title: "This is title 1",
          body: "This is body 2",
        },
      ],
      selections: [],
    };
  },
  computed: {
    ...mapState([
      "archivedMails"
    ]),
    selectedEmails() {
      return this.selections.length
    },
    pageName() {
      return this.$route.name;
    },
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
    isEmailArchived(mail) {
      if (this.archivedMails.includes(mail.id)) {
        return "__read"
      }
    },
  },
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
