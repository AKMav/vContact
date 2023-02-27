import { createStore } from "vuex";

export const store = createStore({
  state () {
    return {
      contacts: [
        {
          fullname: "Antony Stark",
          email: "stark@gmail.com",
          phone: "+998901234567",
          tags: ["Family", "Neighbors" ],
          id: "21"
        },
        {
          fullname: "Bruce Wayne",
          email: "batman@gmail.com",
          phone: "+998907778899",
          tags: ["Family", "Work", "Gym"],
          id: "20"
        },
        {
          fullname: "Thor Odinson",
          email: "mighty_avenger@gmail.com",
          phone: "+998900081254",
          tags: ["Friends", "Gym"],
          id: "19"
        },
        {
          fullname: "Tanos",
          email: "tanos@cosmo.com",
          phone: "+998009876543",
          tags: ["Gym", "Other"],
          id: "18"
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