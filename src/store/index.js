import { createStore } from "vuex"

export default createStore({
  state: {
    mails: [
      {
        id: 1,
        title: "This is title 1",
        body: "This is body 2",
      },
      {
        id: 2,
        title: "This is title 2",
        body: "This is body 2",
      },
    ],
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
    readCount(state) {
      return state.readMails.length;
    },
    archiveCount(state) {
      return state.archivedMails.length;
    },
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
