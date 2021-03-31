import { createStore } from "vuex";
import { auth } from "./auth/auth";
import { albumInfo } from "./albums/albums.js";

export default createStore({
  modules: { auth, albumInfo },
});
