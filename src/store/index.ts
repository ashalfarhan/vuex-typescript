import { API_URL } from "@/constants";
import {
  Actions,
  Getters,
  Mutations,
  State,
  Store,
  TAction,
  Post,
  TMutation,
} from "@/types";
import { ActionTree, createStore, GetterTree, MutationTree } from "vuex";

const state: State = {
  post: {
    title: "",
    body: "",
  },
  posts: [],
};
const mutations: MutationTree<State> & Mutations = {
  [TMutation.ADD](state, payload: Post) {
    state.post = payload;
  },
  [TMutation.LOAD](state, payload: Post[]) {
    state.posts = [...payload, ...state.posts];
  },
};
const actions: ActionTree<State, State> & Actions = {
  [TAction.ADD]({ commit }, payload: Post) {
    commit(TMutation.ADD, payload);
  },
  async [TAction.FETCH]({ commit }) {
    try {
      const response = await fetch(API_URL);
      const data: Post[] = await response.json();
      commit(TMutation.LOAD, data);
    } catch (err) {
      console.error(err);
    }
  },
};
const getters: GetterTree<State, State> & Getters = {
  getAll: (state) => {
    return state.posts;
  },
};

export const store = createStore<State>({
  state,
  mutations,
  actions,
  getters,
  modules: {},
});

export function useStore() {
  return store as Store;
}
