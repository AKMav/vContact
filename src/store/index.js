import { createStore } from "vuex";

export const store = createStore({
  state () {
    return {
      contacts: []
    };
  },
  mutations: {
    ADD_CONTACT(state, payload) {
      state.contacts = [...state.contacts, payload];
    },
    REMOVE_CONTACT(state, payload) {
      state.contacts = state.contacts.filter(item => item.id !== payload);
    },
    CHANGE_CONTACT(state, payload) {
      state.contacts = state.contacts.map(item => {
        if (item.id === payload.id) {
          return payload;
        } else return item;
      });
    }
  },
  actions: {
    addNewContact({ commit }, contact) {
      commit("ADD_CONTACT", contact);
    },
    removeContact({ commit }, id) {
      commit("REMOVE_CONTACT", id);
    },
    changeContact({ commit }, contact) {
      commit("CHANGE_CONTACT", contact);
    }
  },
  getters: {
    contacts: s => s.contacts
  }
});