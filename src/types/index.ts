import {
  ActionContext,
  CommitOptions,
  DispatchOptions,
  Store as VuexStore,
} from "vuex";

// Set the shape of Post
export interface Post {
  userId?: number;
  id?: number;
  title: string;
  body: string;
}

// Declare Type of  state
export type State = { post: Post; posts: Post[] };

// Strict Mutations, Actions, and Getters methods
export enum TMutation {
  ADD = "ADD_POST",
  LOAD = "LOAD_POST",
}
export enum TAction {
  ADD = "ADD_POST",
  FETCH = "FETCH_POST",
}

// Type Mutations
export type Mutations<S = State> = {
  [TMutation.ADD](state: S, payload: Post): void;
  [TMutation.LOAD](state: S, payload: Post[]): void;
};

// Type Getters
export type Getters<S = State> = {
  getAll(state: S): Post[];
};

// Type ActionsContext
export type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

// Type Actions
export interface Actions {
  [TAction.ADD]({ commit }: AugmentedActionContext, payload: Post): void;
  [TAction.FETCH]({ commit }: AugmentedActionContext): void;
}

export type Store = Omit<
  VuexStore<State>,
  "commit" | "getters" | "dispatch"
> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
} & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};
