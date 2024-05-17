import { defineStore } from "pinia";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios;

export const useUserStore = defineStore("user", {
  state: () => ({
    id: "",
    name: "",
    email: "",
    token: "",
    isAuthenticated: false,
  }),
  actions: {
    async login(email, password) {
      await $axios
        .post("/login", { email: email, password: password })
        .then((result) => {
          let data = result.data;
          localStorage.setItem("token", data.token);
          this.$state.token = data.token;
          this.$state.id = data.user.id;
          this.$state.name = data.user.name;
          this.$state.email = data.user.email;
          this.$state.isAuthenticated = true;
        });
    },

    async register({ name, email, password, password_confirmation }) {
      await $axios.post("/register", {
        name,
        email,
        password,
        password_confirmation,
      }).then((result) => {
        let data = result.data;
        localStorage.setItem("token", data.token);
        this.$state.token = data.token;
        this.$state.id = data.user.id;
        this.$state.name = data.user.name;
        this.$state.email = data.user.email;
        this.$state.isAuthenticated = true;
      });
    },
    async getUser() {
      let res = await $axios.get("/me");
      this.$state.id = res.data.id;
      this.$state.name = res.data.name;
      this.$state.email = res.data.email;
      this.$state.isAuthenticated = true;
    },
    async logout() {
      await $axios.get("/logout");
      this.resetState();
    },
    resetState() {
      this.$state.id = "";
      this.$state.name = "";
      this.$state.email = "";
      this.$state.token = "";
      this.$state.isAuthenticated = false;
    },
    checkAuthenticated() {},
  },
  persist: true,
});
