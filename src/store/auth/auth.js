import { Auth } from "aws-amplify";

export const auth = {
  namespace: true,
  state: { user: null },
  mutations: {
    //   if you commit this mutation, it passes the payload as the user
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    //   log out
    async logout({ commit }) {
      commit("setUser", null);
      return await Auth.signOut();
    },

    // login
    async login({ commit }, { username, password }) {
      try {
        await Auth.signIn({
          username,
          password,
        });

        const userInfo = await Auth.currentUserInfo();
        commit("setUser", userInfo);
        return Promise.resolve("Success");
      } catch (error) {
        console.log(error);
        return Promise.reject(error);
      }
    },

    // signup confirmation
    async confirmSignUp(_, { username, code }) {
      try {
        await Auth.confirmSignUp((username, code));
        return Promise.resolve();
      } catch (error) {
        console.log(error);
        return Promise.reject();
      }
    },
    // signup
    async signUp(_, { username, password, email }) {
      try {
        await Auth.signUp({
          username,
          password,
          attributes: {
            email,
          },
        });
        return Promise.resolve();
      } catch (error) {
        console.log(error);
        return Promise.reject();
      }
    },
    // auth
    async authAction({ commit }) {
      const userInfo = await Auth.currentUserInfo();
      commit("setUser", userInfo);
    },
  },
  getters: {
    user: (state) => state.user,
  },
};
