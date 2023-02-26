import { createStore } from "vuex";

export const store = createStore({
  state () {
    return {
      contacts: [
        {
          fullname: "User",
          email: "email@email.com",
          phone: "+998909989121",
          tags: ["Family"],
          id: "21"
        },
      ]
    };
  },
  mutations: {
    ADD_CONTACT(state, payload) {
      if (this.state.contacts.find(item => item.id === payload.id)) {
        state.contacts = state.contacts.map(item => {
          if (item.id === payload.id) {
            return payload;
          } return item;
        });
      } else {
        state.contacts = [...state.contacts, payload];
      }
    },
    REMOVE_CONTACT(state, payload) {
      state.contacts = state.contacts.filter(item => item.id !== payload);
    },
  },
  actions: {
    addNewContact({ commit }, contact) {
      commit("ADD_CONTACT", contact);
    },
    removeContact({ commit }, id) {
      commit("REMOVE_CONTACT", id);
    },
  },
  getters: {
    contacts: s => s.contacts
  }
});