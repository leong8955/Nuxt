import { defineStore, skipHydrate } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isAuthenticated: false,
    user: null,
    token: null,
    // game: {
    //   balance: 0,
    //   token: 0,
    // },
    // email: null,
    // fullname: null,
    // game_fav_list: [],
  }),
  getters: {
    // fullName: (state) => state.user?.full_name || '', // Getter for full name
    // contactEmail: (state) => state.user?.contact_email || '', // Getter for contact email
  },
  actions: {
    reset() {
      this.isAuthenticated = false;
      this.user = null;
      this.token = null;
      // this.game = {
      //   balance: 0,
      //   token: 0,
      // };
      // this.email = null;
      // this.fullname = null;
      // this.game_fav_list= [];
    },
  },
  persist: true,
});