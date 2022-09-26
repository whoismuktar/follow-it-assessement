import { createStore } from "vuex"

export default createStore({
  state: {
    menuItems: [
      {
        title: "Inbox",
        path: "inbox",
        id: "inbox",
      },
      {
        title: "Archive",
        path: "archive",
        id: "archive",
      },
    ],
    readMails: [],
    archivedMails: [],
    dialogMailActive: false,
    dialogMail: {},
  },
  getters: {
  },
  mutations: {
    setReadMails(state, data) {
      state.readMails = [...state.readMails, ...data]
    },
    setArchiveMails(state, data) {
      state.archivedMails = [...state.archivedMails, ...data]
    },
    resetModal(state) {
      state.dialogMailActive = false;
      state.dialogMail = {}
    },
    setMailDialog(state, data) {
      state.dialogMail = data;
      state.dialogMailActive = true;
    },
  },
  actions: {
    setReadMails({commit}, mails) {
      commit("setReadMails", mails)
    },
    setArchiveMails({commit}, mails) {
      commit("setArchiveMails", mails)
    },
    resetModal({commit}) {
      commit("resetModal")
    },
    openMailDialog({commit}, mail) {
      commit("setMailDialog", mail)
    }
  },
  modules: {
  }
})
