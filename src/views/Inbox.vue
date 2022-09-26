<template>
  <div class="page__inbox">
    <div class="page__title">{{ pageName }}</div>

    <div class="selected__emails">Email Selected {{ selectedEmails }}</div>

    <div class="selection__action">
      <span class="selection__action__child select__all">
        <input type="checkbox" name="selectAll" id="selectAll" />
      </span>

      <span class="selection__action__child mark__read">
        <button id="mark__read">Mark as read (r)</button>
      </span>

      <span class="selection__action__child mark__archive">
        <button id="mark__archive">Archive (a)</button>
      </span>
    </div>

    <div class="mails">
      <div v-for="(menu, index) in mails" :key="index" class="mails__item mail">
        <span class="select__mail">
          <input
            v-model="selections"
            type="checkbox"
            :value="menu.id"
            name="selectMail"
            id="selectMail"
          />
        </span>

        <div class="mail__title">This is a temporal title</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedEmails: 0,
      mails: [{id: 1}, {id: 2}],
      selections: [],
    };
  },
  computed: {
    pageName() {
      return this.$route.name;
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
  cursor: pointer;
  margin-bottom: 20px;
}
.mails__item .select__mail {
  margin-right: 20px;
}
</style>
