import { API_URL } from "@/constants";
import {
  Actions,
  Getters,
  Mutations,
  State,
  Store,
  Post,
  TAction,
  TMutation,
  AugmentedActionContext,
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
  [TMutation.ADD](state: State, payload: Post) {
    state.posts = [payload, ...state.posts];
  },
  [TMutation.LOAD](state: State, payload: Post[]) {
    state.posts = [...payload, ...state.posts];
  },
};
const actions: ActionTree<State, State> & Actions = {
  [TAction.ADD]({ commit }: AugmentedActionContext, payload: Post) {
    console.log(payload);
    commit(TMutation.ADD, payload);
  },
  async [TAction.FETCH]({ commit }: AugmentedActionContext) {
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
  getAll: (state: State) => {
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
